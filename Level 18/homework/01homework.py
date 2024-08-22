store = "lets buy some stuff"
first_buy_bread = input("buy bread: ")
second_buy_choclate = input("buy choclate: ")
third_buy_pancake = input("buy pancake: ")

if first_buy_bread != "yes":
    print("sadly we cant buy bread")
elif first_buy_bread == "yes":
    print("we can buy bread")

if second_buy_choclate != "yes":
    print("we dont have choclate")
elif second_buy_choclate == "yes":
    print("buy choclate")

if third_buy_pancake != "yes":
    print("we dont have pancake")
elif third_buy_pancake == "yes":
    print("buy pancake")

