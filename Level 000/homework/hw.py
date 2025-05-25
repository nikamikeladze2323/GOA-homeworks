from turtle import*

# we start drawing a house
begin_fill()
color("green")
# we start drawing a square 
width(4)
forward (150)
left(90)  
forward(150)
left(90)
forward(150)
left(90)
forward(150)
end_fill()
# we finished drawing a square

# we start drawing a door
begin_fill()
left(90)
forward(60)
color("yellow")
left(90)
forward(60)
right(90)
forward(30)
right(90)
forward(60)
end_fill()
# we finished drawing a door

# we start drawing a roof

penup()
goto(150,150)
pendown()

begin_fill()
color("orange")

left(210)

forward(150)
left(120)
forward(150)
end_fill()

# we start drawing windows

penup()
goto(130,130)
pendown()
color("brown")
left(30)
forward(40)   
right(90)
forward(40)   
right(90)
forward(40)   
right(90)
forward(40)   
right(90)
forward(40)
right(90)
forward(20)
right(90)
forward(40)
penup()
goto(20,90)
pendown()
forward(40)
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
right(180)
forward(20)
left(90)
forward(40)