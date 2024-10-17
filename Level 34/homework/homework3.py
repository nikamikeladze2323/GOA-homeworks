def number_input():
    user_input = int(input("Enter your first number: "))
    user_input1 = int(input("Enter your second number: "))
    if user_input > user_input1:
        print(user_input)
    else:
        print(user_input1)
number_input()