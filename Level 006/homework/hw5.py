# 6)შემოიტანე 1 input და 1 ცლადი შეადარე, არის თუ არა ერთი რიცხვი მეორეზე ნაკლები ან ტოლი.

num = 213
num1 = int(input("Enter num: "))

if num1 > num:
    print("შენი შემოტანილი რიცხვი მეტია კომპიუტერის რიცხვზე")
elif num1 < num:
    print("შენი შემოტანილი რიცხვი ნაკლებია კომპიუტერის რიცხვზე")
else:
    print("შენი შემოტანილი რიცხვი და კომპიუტერის რიცხვი ტოლია")