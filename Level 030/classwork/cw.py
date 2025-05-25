import turtle 

def draw_square(size):
    """ 
    🟦 ეს ფუნქცია იღებს size არგუმენტს და ხატავს კვადრატს.  
    🟦 ფუნქცია საშუალებას გვაძლევს დავხატოთ მრავალჯერადი კვადრატები სხვადასხვა ზომით. 
    """
    for _ in range(4): 
        turtle.forward(size) 
        turtle.right(90) 


draw_square(50)  
turtle.penup()  
turtle.goto(100, 100)  
turtle.pendown()  
draw_square(100)  

turtle.done()  
