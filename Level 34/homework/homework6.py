def user_number_input():
    user_input = int(input("Enter your number: "))
    if user_input % 2 == 0:
        print(True)
    else:
        print(False)
user_number_input()