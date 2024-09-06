# Website
print("Welcome to the our website. here you can text someone message, send someone friend request and call your family or someone else!")
print("But first you need to sign up or log in your account.")
print("1. Press 1 if you want to sign up.")
print("2. Press 2 if you want to log in.")
enter = int(input(": "))
# Sign up
if enter == 1:
    print("Sign up")
    firstname = input("Enter your first name: ")
    secondname = input("Enter your second name: ")
    if firstname != secondname:
        tryagain = input("It's seems you typed the different names. please try again: ")
        print("Please try again later")
    elif firstname == secondname:
        print("Ok now enter your password.")     
        password = int(input("Enter your password: "))
        print("It's seems you are new here welcome to our website", firstname)
# log in
elif enter == 2:
    print("log in")
    username = input("Enter your account username: ")
    password1 = int(input("Enter your account password: "))
    while password1 != "gigachad1234":
        tryagain1 = int(input("It's seems password is wrong try again: "))
    print("Welcome back", username)    