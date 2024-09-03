# 1.
num = int(input("Enter your number: "))
for i in range(1, num):
    print(i)
# 2.
num1 = int(input("Enter your number: "))
for i in range(1, num1):
    i = i + i
    print(i)
# 3.
num2 = int(input("Enter your number: "))
num3 = int(input("Enter your number: "))
num4 = int(input("Enter your number: "))
for i in range(1, num2 + num3 + num4):
    i = num2 + num3 + num4 // 3
    print(i)
# 4.
num5 = int(input("Enter your number: "))
for i in range(1, num5, 2):
    print(str(i) + ". კენტია")
num6 = int(input("Enter your number: "))
for i in range(0, num5, 2):
    print(str(i) + ". ლუწია")
# 5. 
num7 = int(input("Enter your number: "))
for i in range(1, num7):
    if i % 5 == 0:
        print(i)
# 6.
for i in range(1, 100):
    print(i)
