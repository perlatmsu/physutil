from __future__ import division
from visual import *
from visual.graph import *
from physutil import *

# Define track and cart objects
track = box(pos=vector(0,-0.05,0), size=(3.0,0.05,.10), color=color.white)
cart = box(pos=vector(-1.0,0,0), size=(0.1,0.04,0.06), color=color.green)

# Define axis
axis = PhysAxis(track, 10)

# Set up graph window
graph = PhysGraph()

# Set up cart velocity and verify
mcart = 0.80
vcart = vector(0.5,0,0)
print("cart velocity = ", vcart)

# Set up timing data
deltat = 0.01
t = 0
tf =3.99
# Set timer in top right of screen
timerDisplay = PhysTimer(1, 1)

# Set up motion map
motionMap = MotionMap(cart, tf, 5, markerScale=0.5)

# Main update loop; perform physics updates and drawing
while t < tf:

    # Required to make animation visible / refresh smoothly
    rate(100)
   
    # Update and draw motion map artifacts
    motionMap.update(t, vcart)

    # Cart physics update
    cart.pos = cart.pos + vcart*deltat

    # Update timer
    t = t+deltat
    timerDisplay.update(t)

    # Update graph plot
    graph.plot(t, cart.pos.x)

# Verify final results!
print("final velocity = ",vcart)
print("final position = ", cart.pos)
