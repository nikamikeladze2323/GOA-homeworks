def number():
    user_input = int(input("Enter your number: "))
    if user_input > 0:
        print("მეტია ნულზე")
    elif user_input == 0:
        print("ტოლია ნულის")
    else:
        print("ნაკლებია ნულზე")
number()
