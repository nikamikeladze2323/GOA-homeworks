num = int(input("Enter your number: "))
for i in range(num):
    if num == num % 2 == 0:
        print(i // 2)
    else:
        print(i * 3 + 1)