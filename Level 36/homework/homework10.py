def numbers():
    num1 = int(input("Enter your first number: "))
    num2 = int(input("Enter your second number: "))
    if num1 == num2:
        print("ტოლები არიან")
    elif num1 > num2:
        print("num1 მეტია num2-ზე")
    else:
        print("num2 მეტია num1-ზე")
numbers()