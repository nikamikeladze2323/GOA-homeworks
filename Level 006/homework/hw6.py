# 7) მომხმარებელს შემოატანინეთ სახელი და შეამოწმეთ ეს სახელი უდრის თუ არა თქვენს სახელს

my_name = "ნიკოლოზი"
userinput = input("Enter name: ")

if userinput != my_name:
    print("you got my name wrong")
elif userinput == my_name:
    print("great job!")