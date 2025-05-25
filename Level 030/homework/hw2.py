# 3) შექმენით ფუნქცია რომელსაც გადაეცემა არგუმენტად რიცხვი შემდეგ კი მან უნდა დაგვიბრუნოს ლუწია ეს რიცხვი თუ კენტი

def fun(num):
    if num % 2 == 0:
        return num, "even"
    else:
        return num, "odd"


print(fun(int(input("Enter num: "))))