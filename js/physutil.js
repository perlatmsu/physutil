// physutil.py v1.22
// Copyright (c) 2011-2012 GT Physics Education Research Group
// License: GPL-3.0 (http://opensource.org/licenses/GPL-3.0)

// This module is built to simplify and assist high school physics studenturs
// in the construction of models for lab exercises using VPython.

// Revisions by date

// 2016 February 2 -- Bruce Sherwood
// Adapt for use with VPython

// vG1.00 6 September 2012 -- Bruce Sherwood
// Conversion to JavaScript and the GlowScript environment.
// Collapse MotionMap and MotionMapN, which were very similar.
// Make either of these add a trail; no need for the user to do so.
// Add to their arguments trailColor (default is color.yellow)
// and makeTrail (default is True).

// v1.22 24 January 2011 -- Danny Caballero
// Added labelColor attribute to PhysAxis, MotionMap, and MotionMapN
// controls color of text

// v1.21 5 December 2011 -- Danny Caballero
// Added timerColor attribute to PhysTimer
// controls color of text

// v1.2 19 October 2011 -- Danny Caballero
// Added MotionMapN, a class that allows the placing of breadcrumbs or arrows
// every "n" steps.

// v1.13 26 September 2011 -- Daniel Borrero
// Fixed unit test bug for PhysTimer

// v1.12 30 August 2011 -- Daniel Borrero
// Fixed bug in PhysTimer output
// E.g., 2.00 s is now displayed as 00:00:02.00 instead of 00:00:01:100

// v1.11 29 August 2011 -- Danny Caballero
// Changed License to GNU

// v1.1 15 August 2011 -- Daniel Borrero
// Print statements made compatible with Python 3.1

// v1.01 16 July 2011 -- Danny Caballero
// Added ability to change PhysAxis color using axisColor

// v1.0 29 April 2011 -- CS Build Team
// Heavy Modification

// v0.1 05 January 2011 -- Danny Caballero
// Initial Build

function tform(N) { // convert 5 -> 05
    var s = (N < 10) ? '0': ''
    return s+N.toString()
}

// Helper function for returning proper size of something
function obj_size(obj) {
    if (obj.constructor == vp_box || obj.constructor == vp_pyramid) { 
        return obj.size
    }
    else if (obj.constructor == vp_sphere) { 
        return vec(obj.radius, obj.radius, obj.radius)
    }
}

function MotionMap(obj, tf, numMarkers, args) {
    return new Map(obj, tf, numMarkers, 'MotionMap', args)
}

function MotionMapN(obj, dt, numSteps, args) {
    return new Map(obj, dt, numSteps, 'MotionMapN', args)
}

function Map(obj, tf_or_dt, markers_or_steps, maptype, args) {
    if (args === undefined) args = {}
/*
    This class assists students in constructing motion maps 
    using either arrows (measuring a quantity) or "breadcrumbs" 
    (with timestamps).
*/
    
    var markerScale = (args.markerScale === undefined) ? 1 : args.markerScale
    var dropTime = (args.dropTime === undefined) ? false : args.dropTime
    var labelColor = (args.labelColor === undefined) ? color.white : args.labelColor
    var markerColor = (args.markerColor === undefined) ? color.red : args.markerColor
	var trailColor = (args.trailColor === undefined) ? color.yellow : args.trailColor
	var makeTrail = (args.makeTrail === undefined) ? true : args.makeTrail
    var arrowOffset = (args.arrowOffset === undefined) ? vec(0,0,0) : args.arrowOffset
    var timeOffset = (args.timeOffset === undefined) ? vec(0,0,0) : args.timeOffset
    var markerType = (args.markerType === undefined) ? "arrow" : args.markerType
    var labelMarkerOrder = (args.labelMarkerOrder === undefined) ? true : args.labelMarkerOrder
    var labelMarkerOffset = (args.labelMarkerOffset === undefined) ? vec(0,0,0) : args.labelMarkerOffset
    // MotionMap
    // obj - object to track in mapping / placing markers
    // MotionMap:
    //    tf_or_dt is tf - expected tFinal, used to space marker placement over time
    //    markers_or_steps is numMarkers - number of markers to place
    // MotionMapN:
    //    tf_or_dt is dt - time between steps
    //    markers_or_steps is numSteps - number of steps between markers
    // markerType - determines type of motionmap; options are "arrow" or "breadcrumbs"
    // markerScale - replaces pSize / quantscale from motionmodule.py depending on type
    // markerColor - color of markers
    // labelMarkerOrder - drop numbers of markers?
    // labelMarkerOffset - amount to offset numbering by
    // dropTime - boolean determining whether a timestamp should be placed along with the marker
    // timeOffset - if dropTime is True, determines the offset, if any, of the label from the marker
    // arrowOffset - shift an arrow by an amount (x,y,z), useful for two arrows views

    this.obj = obj
    this.markerType = markerType
    this.markerScale = markerScale
    this.markerColor = markerColor
    this.labelMarkerOrder = labelMarkerOrder
    this.labelMarkerOffset = labelMarkerOffset
    this.timeOffset = timeOffset
    this.dropTime = dropTime
    this.arrowOffset = arrowOffset
    this.labelColor = labelColor
	this.trailColor = trailColor
    this.scale = canvas.selected.pixel_to_world
	this.makeTrail = makeTrail
    if (makeTrail) attach_trail(obj,  {color:trailColor, radius:this.scale, pps:5})
    
    // Calculate size of interval for each step, set initial step index
    this.interval = (maptype == 'MotionMap') ? tf_or_dt / markers_or_steps : tf_or_dt * markers_or_steps
    this.curMarker = 0
    
    this.update = function(t, args) {
        if (args === undefined) args = {}
        var quantity = (args.quantity === undefined) ? 1 : args.quantity
        var threshold = this.interval * this.curMarker
        // Display new arrow if t has broken next threshold
        if (t >= threshold) {
            // Increment threshold
            this.curMarker++
            
            // Display marker!
            if (this.markerType == "arrow") { 
                vp_arrow( {pos:this.obj.pos.add(this.arrowOffset), axis:this.markerScale.multiply(quantity), color:this.markerColor} )
            }
            else if (this.markerType == "breadcrumbs") {
                // 10*this.markerScale*quantity is the diameter of a VPython points object,
                // which we'll implement here as a sphere
                var diameter = 3*this.markerScale*quantity*this.scale
                vp_sphere( {pos:this.obj.pos, size:vec(1,1,1).multiply(diameter), color:this.markerColor, emissive:true} )
            }

            //Also display timestamp if requested
            if (this.dropTime) { 
                var epsilon = vec(0,this.markerScale*.5,0).add(this.timeOffset)
                var tout = 't='+t.toPrecision(4)+'s'
                label( {pos:this.obj.pos.add(epsilon), text:tout, 
                        height:10, box:false, color:this.labelColor, opacity:0} )
            }
            
            // Same with order label
            if (this.labelMarkerOrder) {
                label( {pos:this.obj.pos.sub(vec(0,this.markerScale*.5,0)).add(this.labelMarkerOffset), text:this.curMarker.toString(), 
                        height:10, box:false, color:this.labelColor, opacity:0} )
            }
        }
    }
}

function PhysAxis(obj, numLabels, args) {
    if (!(this instanceof PhysAxis)) return new PhysAxis(obj, numLabels, args)
    if (args === undefined) args = {}
/*
    This class assists students in creating dynamic axes for their models.
*/

    this.__reorient = function() {
        // Actual internal axis setup code... determines first whether we are creating or updating
        var updating = (this.intervalMarkers.length > 0)

        // Then determines the endpoint of the axis and the interval
        var final = this.startPos.add(this.axis.multiply(this.length))
        var interval = this.axis.multiply(this.length / (this.numLabels-1))

        // Loop for each interval marker, setting up or updating the markers and labels
        var i=0
        while (i<this.numLabels) {       
            var intervalPos = this.startPos.add(interval.multiply(i))
            var labelText

            // Determine text for this label
            if (this.labelText !== null) { 
                labelText = this.labelText[i]
            }
            else if (this.axisType == "y") {
                labelText = intervalPos.y.toFixed(2)
            }
            else { 
                labelText = intervalPos.x.toFixed(2)
            }
            if (updating) { 
                this.intervalMarkers[i].pos = intervalPos
                this.intervalLabels[i].pos = intervalPos.add(this.labelShift)
                this.intervalLabels[i].text = labelText
            }
            else {
                var diameter = 6*canvas.selected.pixel_to_world
                this.intervalMarkers.push( vp_sphere( {pos:intervalPos, color:this.axisColor, size:vec(1,1,1).multiply(diameter)} ))
                this.intervalLabels.push( label( {pos:intervalPos.add(this.labelShift), text:labelText, box:false, height:8, color:this.labelColor} ))
            }
            i=i+1
        }

        // Finally, create / update the line itself!
        if (updating) {
            this.axisCurve.clear()
            this.axisCurve.push({pos:this.startPos})
            this.axisCurve.push({pos:final})
        }
        else {
            var radius = canvas.selected.pixel_to_world
            this.axisCurve = curve( {color:this.axisColor, radius:radius} )
            this.axisCurve.push({pos:this.startPos})
            this.axisCurve.push({pos:final})
        }
    }
    
    var labels = (args.labels === undefined) ? null : args.labels
    var labelOrientation = (args.labelOrientation === undefined) ? "down" : args.labelOrientation
    var labelColor = (args.labelColor === undefined) ? color.white : args.labelColor
    var length = (args.length === undefined) ? null : args.length
    var axisColor = (args.axisColor === undefined) ? color.yellow : args.axisColor
    var startPos = (args.startPos === undefined) ? null : args.startPos
    var axisType = (args.axisType === undefined) ? "x" : args.axisType
    var axis = (args.axis === undefined) ? vec(1,0,0) : args.axis
    // PhysAxis
    // obj - Object which axis is oriented based on by default
    // numLabels - number of labels on axis
    // axisType - sets whether this is a default axis of x or y, or an arbitrary axis
    // axis - unit vector defining the orientation of the axis to be created IF axisType = "arbitrary"
    // startPos - start position for the axis - defaults to (-obj_size(obj).x/2,-4*obj_size(obj).y,0)
    // length - length of the axis - defaults to obj_size(obj).x
    // labelOrientation - how labels are placed relative to axis markers - "up", "down", "left", or "right"

    this.intervalMarkers = []
    this.intervalLabels = []
    this.labelText = labels
    this.obj = obj
    this.lastPos = this.obj.pos
    this.numLabels = numLabels
    this.axisType = axisType
    this.axis = (axisType != "y") ? axis : vec(0,1,0)
    this.length = (length) ? length : obj_size(obj).x
    this.startPos = (startPos) ? startPos : vec(-obj_size(obj).x/2,-4*obj_size(obj).y,0)
    this.axisColor = axisColor
    this.labelColor = labelColor
    this.labelShift = vec(0,0,0)
    if (labelOrientation == "down") { 
        this.labelShift.y = -0.05*this.length
    }
    else if (labelOrientation == "up") { 
        this.labelShift.y = 0.05*this.length
    }
    else if (labelOrientation == "left") { 
        this.labelShift.x = -0.1*this.length
    }
    else if (labelOrientation == "right") { 
        this.labelShift.x =  0.1*this.length    
    }
    this.__reorient()

    this.update = function() {
        // Determine if reference obj. has shifted since last update, if so shift us too
        if (this.obj.pos.equals(this.lastPos)) { 
            var diff = this.obj.pos.sub(this.lastPos)

            for (var i=0; i<this.intervalMarkers.length; i++) {
                this.intervalMarkers[i].pos = this.intervalMarkers[i].pos.add(diff)
                this.intervalLabels[i].pos = this.intervalLabels[i].pos.add(diff)
            }
            //this.axisCurve.pos = [x + diff for x in this.axisCurve.pos]
            this.axisCurve.pos = this.obj.pos
            this.lastPos = this.obj.pos
        }
    }
    
    this.reorient = function(args) {
        var labelOrientation = (args.labelOrientation === undefined) ? null : args.labelOrientation
        var startPos = (args.startPos === undefined) ? null : args.startPos
        var labels = (args.labels === undefined) ? null : args.labels
        var length = (args.length === undefined) ? null : args.length
        var axis = (args.axis === undefined) ? null : args.axis
            // Determine which, if any, parameters are being modified
            this.axis = (axis) ? axis : this.axis
            this.startPos = (startPos) ? startPos : this.startPos
            this.length = (length) ? length : this.length
            this.labelText = (labels) ? labels : this.labels
    
            // Re-do label orientation as well, if it has been set
            if (labelOrientation == "down") { 
                this.labelShift = vec(0,-0.05*this.length,0)
            }
            else if (labelOrientation == "up") { 
                this.labelShift = vec(0,0.05*this.length,0)
            }
            else if (labelOrientation == "left") { 
                this.labelShift = vec(-0.1*this.length,0,0)
            }
            else if (labelOrientation == "right") { 
                this.labelShift =  vec(0.1*this.length,0,0)
    
            }
            this.__reorient()
    }
}

function PhysTimer(x, y, args) {
    if (!(this instanceof PhysTimer)) return new PhysTimer(x, y, args)
    if (args === undefined) args = {}
/*
    This class assists students in creating an onscreen timer display.
*/
    var useScientific = (args.useScientific === undefined) ? false : args.useScientific
    var timerColor = (args.timerColor === undefined) ? color.white : args.timerColor
    
    // PhysTimer
    // x,y - world coordinates for the timer location
    // useScientific - bool to turn off/on scientific notation for time
    // timerColor - attribute controlling the color of the text
    
    this.useScientific = useScientific
    this.timerColor = timerColor
    if (useScientific === false) { 
        this.timerLabel = label( {pos:vec(x,y,0), text:'00:00:00.00', box:false} )
    }
    else { 
        this.timerLabel = label( {pos:vec(x,y,0), text:'00E01', box:false} )
    }
            
    this.update = function(t) {
        // Basically just use sprintf formatting according to either stopwatch or scientific notation
        if (this.useScientific) { 
            this.timerLabel.text = t.toPrecision(4)
        }
        else { 
            var hours = Math.floor(t / 3600)
            var mins = Math.floor((t / 60) % 60)
            var secs = Math.floor(t % 60)
            var frac = Math.floor(Math.round(100 * (t % 1)))
            if (frac == 100) { 
                frac = '00'
                secs = secs + 1;
            }
			var temp = tform(hours)+':'+tform(mins)+':'+tform(secs)+':'+tform(frac)
            //this.timerLabel.text = "%02d:%02d:%02d.%02d" % (hours, mins, secs, frac)
            this.timerLabel.text = tform(hours)+':'+tform(mins)+':'+tform(secs)+':'+tform(frac)
        }
    }
}
function PhysGraph(args) {
    if (!(this instanceof PhysGraph)) return new PhysGraph(args)
    var numPlots = 1
    if (args !== undefined) {        
        if (args.numPlots !== undefined) numPlots = args.numPlots
        else numPlots = args
    }
/*
    This class assists students in creating graphs with advanced functionality.
*/
    
    // Static, pre-determined list of colors from which each line will be generated
    var graphColors = [color.red, color.green, color.blue, color.yellow,  color.orange, color.cyan, color.magenta, color.white]
    
    // Create our specific graph window
    this.graphDisplay = graph({width:475, height:350})
    this.numPlots = numPlots

    // Initialize each plot curve
    this.graphs = []
    for (var i=0; i<numPlots; i++) {
        this.graphs.push(series( {color:graphColors[i%graphColors.length]} ))
    }

    this.plot = function (args) {
        var independent = arguments[0]
        var dependents = []
        for (var i=1; i<arguments.length; i++) dependents.push(arguments[i])
        if (dependents.length != this.numPlots) { 
            throw new Error('Number of dependent parameters ('+dependents.length+') given does not match numPlots ('+this.numPlots+') given at initialization.')
        }

        // Plot each line based on its parameter
        for (i=0; i<dependents.length; i++) {
            this.graphs[i].plot(independent, dependents[i])
        }
    }
}