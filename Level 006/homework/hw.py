# 1) შექმენი ორი input შეადარე ორი რიცხვი და დაბეჭდე შედეგი.

num1 = int(input("Enter num: "))
num2 = int(input("Enter num: "))

if num1 > num2:
    print(num1, ">", num2)
elif num1 < num2:
    print(num1, "<", num2)
else:
    print(num1, "=", num2)