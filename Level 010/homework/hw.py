# 1) შექმენით კალკულატორი, მომხმარებელს შეეკითხეთ ორი რიცხვი, შემდეგ შეეკითხეთ რა მოქმედების შესრულება სურს ამ ორ რიცხვზე და მისი პასუხიდან გამომდინარე შეასრულეთ მოქმედება და დაბეჭდეთ მაგალითად თუ მომხმარებელი შემოიტანს რიცხვებს 5 და 7 , და შემოიტანს მოქმედებას მაგალითად დამატებას თქვენ უნდა დაუბეჭდოთ 5 + 7 = 12

print("კალკულატორი")
user_input = int(input("შეიყვანე შენი პირველი რიცხვი: "))
user_input1 = int(input("შეიყვანე შენი მეორე რიცხვი: "))

sum_ = int(input("აირჩიე +, -, *, /"))

if sum_ == "+":
    print(user_input + user_input1)
elif sum_ == "-":
    print(user_input - user_input1)
elif sum_ == "*":
    print(user_input * user_input1)
elif sum_ == "/":
    print(user_input // user_input1)
else:
    print("Error 404")