def calculator():
    num1 = int(input("შემოიტანე პირველი რიცხვი: "))
    num2 = int(input("შემოიტანე მეორე რიცხვი: "))
    operation = input("შემოიტანე მოქმედება (+, -, *, /): ")

    if operation == "+":
        return num1 + num2
    elif operation == "-":
        return num1 - num2
    elif operation == "*":
        return num1 * num2
    elif operation == "/":
        return num1 // num2
    else:
        return "არასწორი მოქმედება"
    
result = calculator()
print(result)  

 
