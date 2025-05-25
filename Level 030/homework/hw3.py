# 4) შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა რიცხვი შემდეგ კი მან უნდა დაგვიბრუნოს ეს რიცხვი დადებითია თუ უარყოფითი

def fun(num):
    if num < 0:
        return num, "negitive"
    else:
        return num, "positive."


print(fun(13))