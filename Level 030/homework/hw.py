# 1) მომხმარებელს შეეკითხეთ ორი რიცხვი შემდეგ კი შექმენით ფუნქცია რომელსაც არგუმენტად გადასცემთ ამ ორ რიცხვს ხოლო ფუნქცია დააბრუნებს ამ ორი რიცხვის ჯამს, ასევე გააკეთე ასეთი 4 ფუნქცია სხვადასხვა მათემატიკური მოქმედებებისთვის, გამოიყენეთ პარამეტრები და არგუმენტად გადაეცით მომხარებლის შემოტანილი რიცხვები

def fun(a, b):
    sum1 = a + b
    return sum1
print(fun(int(input("Enter num: ")), int(input("Enter num: "))))

def fun(a, b):
    sum1 = a - b
    return sum1
print(fun(int(input("Enter num: ")), int(input("Enter num: "))))

def fun(a, b):
    sum1 = a * b
    return sum1
print(fun(int(input("Enter num: ")), int(input("Enter num: "))))

def fun(a, b):
    sum1 = a // b
    return sum1
print(fun(int(input("Enter num: ")), int(input("Enter num: "))))