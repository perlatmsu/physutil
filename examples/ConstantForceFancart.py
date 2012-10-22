from __future__ import division
from visual import *
from physutil import *
from visual.graph import *


# Define track and cart objects
track = box(pos=vector(0, -0.05, 0), size=(5.0, 0.05, 0.10),
            color=color.white)
cart = box(pos=vector(-track.length/2, 0, 0), size=(0.1, 0.04, 0.06),
           color=color.green)

# Set up graph window
graph = PhysGraph(backgroundColor=color.black, xlabel = 'position', ylabel = 'time')

# Define axis
axis = PhysAxis(track, 10, axisColor=color.red)

# Set up cart velocity and verify
mcart = 0.80
vcart = vector(3, 0, 0)
print ('cart velocity =', vcart)

# Set up timing data
deltat = 0.01
t = 0
tf = 6.45
# Set timer in top right of screen
timerDisplay = PhysTimer(1, 1)

### Set up motion map
##motionMap = MotionMap(cart, tf, 10, markerType="breadcrumbs", 
##    labelMarkerOffset=vector(0,.3,0), dropTime=True)
##motionMapReverse = MotionMap(cart, tf, 10, markerType="breadcrumbs",
##    labelMarkerOffset=vector(0,.15,0), markerColor=color.yellow, 
##    dropTime=True, timeOffset=vector(0,.25,0))

# This is a new class that lets you chose the number of steps between dropped
# breadcrumbs or arrow markers. In this example, we're dropping arrows every
# 50 steps. For this class you no longer need to pass a final time but
# must pass the time step.
motionMap = MotionMapN(cart, deltat, 20, markerType="breadcrumbs", 
    labelMarkerOffset=vector(0, .3, 0), dropTime=True, labelColor=color.blue)

# These statements show off a new attribute of the MotionMapN class (arrowOffset)
vMap = MotionMapN(cart, deltat, 50, labelColor=color.red)
aMap = MotionMapN(cart, deltat, 50, arrowOffset=(0, 1, 0),
                  markerColor=color.green, labelColor=color.green)

# Set fan force
Ffan = vector(-0.75, 0, 0)

# Main update loop; perform physics updates and drawing
while t < 2.3:
    
    # Required to make animation visible / refresh smoothly
    rate(100)

    # Calculate acceleration
    accel = Ffan/mcart

    # Update and draw motion map artifacts
    if vcart.x >= 0:
        motionMap.update(t)
        vMap.update(t, vcart)
        aMap.update(t, accel)
    #else:
    #    motionMapReverse.update(t)
    
    # Cart physics update
    vcart = vcart + accel * deltat
    cart.pos = cart.pos + vcart * deltat
  
    # Update timer
    t = t + deltat
    timerDisplay.update(t)

    # Update graph plot
    graph.plot(t, cart.pos.x)
