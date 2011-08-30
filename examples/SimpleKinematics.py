from __future__ import division
from visual import *
from physutil import *
from visual.graph import *

# Set window title
scene.title = "Sample Projectile Trajectory"

# Define scene objects
field = box(pos =vector(0,0,0),size=(300,10,100),color = color.green,opacity = 0.3)
ball = sphere(pos = vector(-150,0,0), radius=5, color = color.blue)

# Set up graph and onscreen curve
graph = PhysGraph()
trail = curve(color = color.yellow, radius = 1)

# Define axis
axis = PhysAxis(field, 10)

# Define physics parameters
mball=0.6
k=0
gvector = vector(0,-9.8,0)
vball = vector(30,40,0)

# Define time parameters
t=0
deltat = 0.001
# Set timer in top right of screen
timerDisplay = PhysTimer(150,150)

# Set up MotionMap
motionMap = MotionMap(ball, 8.163, 10, 
    markerType="breadcrumbs", markerScale=2, 
    labelMarkerOffset=vector(0,-20,0),
    dropTime=True, timeOffset=vector(0,35,0))

# Main update loop; perform physics updates and drawing
while ball.pos.y>=0:
    # Required to make animation visible / refresh smoothly
    rate(1000)

    # Calculate forces / net acceleration
    Fg = mball*gvector
    Fd = -k*vball
    Fnet = Fg + Fd
    accel = Fnet/mball

    # Ball physics update
    vball = vball + accel*deltat
    ball.pos = ball.pos + vball*deltat

    # Update motion map, graph plot, onscreen trail
    motionMap.update(t)
    graph.plot(ball.pos.y,vball.y)
    trail.append(pos = ball.pos)

    # Timer update
    t = t + deltat
    timerDisplay.update(t)

print t
print ball.pos
