user_input = int(input("Enter your number: "))
num = 0
while num < user_input:
    num = num + 1
    if num % 5 == 0:
        print(num)
        