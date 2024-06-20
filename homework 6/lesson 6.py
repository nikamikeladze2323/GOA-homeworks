username = input("Enter your username: ")
password = input("Enter your password: ")
age = input("Enter your age: ")
year_of_birth = input("Enter your year of birth: ")

print("we need to ask you one more question. how meny box do you have and how many phone do you have?")

boxes = int(input("How many box do you have?: "))
phone = int(input("How many phone do you have?: "))

print(f"welcome {username}. we know your informaiton right now. your password is {password} your age is {age} and you born in {year_of_birth}.")  
print("you have" + " " + str(boxes + phone) + " " + "phones and boxes")


