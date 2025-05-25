# 4)შემოიტანე 2 input შეამოწმე, არის თუ არა ორი რიცხვის ჯამი 100-ზე მეტი.

first = int(input("Enter num: "))
second = int(input("Enter num: "))

sum1 = first + second

if sum1 > 100:
    print("100-ზე მეტია შენი შემოტანილი რიცხვი")
elif sum1 < 100:
    print("100-ზე ნაკლებია შენი შემოტანილი რიცხვი")
else:
    print("100 და შენი შემოტანილი რიცხვი ტოლია")