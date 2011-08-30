from __future__ import division
from visual import *
from physutil import *
from visual.graph import *

# Define track and cart objects
track = box(pos=vector(0,-0.05,0), size=(5.0,0.05,0.10), color=color.white)
cart = box(pos=vector(-track.length/2,0,0), size=(0.1,0.04,0.06), color=color.green)

# Set up graph window
graph = PhysGraph()

# Define axis
axis = PhysAxis(track,10,axisColor=color.red)

# Set up cart velocity and verify
mcart = 0.80
vcart = vector(3,0,0)
print ('cart velocity =', vcart)

# Set up timing data
deltat = 0.01
t = 0
tf =6.45
# Set timer in top right of screen
timerDisplay = PhysTimer(1,1)

# Set up motion map
motionMap = MotionMap(cart, tf, 10, markerType="breadcrumbs", 
    labelMarkerOffset=vector(0,.3,0), dropTime=True)
motionMapReverse = MotionMap(cart, tf, 10, markerType="breadcrumbs",
    labelMarkerOffset=vector(0,.15,0), markerColor=color.yellow, 
    dropTime=True, timeOffset=vector(0,.25,0))
# Set fan force
Ffan = vector(-0.75,0,0)

# Main update loop; perform physics updates and drawing
while t < tf:
    # Required to make animation visible / refresh smoothly
    rate(100)

    # Calculate acceleration
    accel = Ffan/mcart

    # Update and draw motion map artifacts
    if vcart.x >= 0:
        motionMap.update(t)
    else:
        motionMapReverse.update(t)
    
    # Cart physics update
    vcart = vcart + accel*deltat
    cart.pos = cart.pos + vcart*deltat
  
    # Update timer
    t = t+deltat
    timerDisplay.update(t)

    # Update graph plot
    graph.plot(t,cart.pos.x)
