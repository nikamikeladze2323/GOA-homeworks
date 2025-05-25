# 1) მომხარებელს შეეკითხეთ ასაკი შემდეგ შეადარეთ მისი ასაკი მეტია თუ არა 18-ზე

num = int(input("Enter age: "))

if num > 18:
    print(num, ">", 18)
elif num == 18:
    print(num, "=", 18)
else:
    print(num, "<", 18)