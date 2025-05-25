# 7) კომენტარებით ახსენით რას შვება pop append

# სია თავდაპირველად
my_list = ["Apple", "Banana", "Cherry"]

# append() - ახალი ელემენტის დამატება სიაში
my_list.append("Date")  # სია გახდება ["Apple", "Banana", "Cherry", "Date"]

# pop() - ელემენტის წაშლა სიიდან (ნაგულისხმევად ბოლო ელემენტი)
removed_item = my_list.pop()  # წაშლის "Date"-ს

# pop(index) - კონკრეტული ინდექსის მიხედვით ელემენტის ამოღება
first_item = my_list.pop(0)  # წაშლის "Apple"-ს, რადგან ინდექსი 0-ს აქვს

# საბოლოო შედეგის გამოტანა
print("სიიდან წაშლილი ელემენტები:", removed_item, first_item)
print("განახლებული სია:", my_list)
