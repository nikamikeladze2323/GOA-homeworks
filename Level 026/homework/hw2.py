# 4) შექმენით სია რომელშიც იქნება რენდომ რიცხვები მოთავსებული შემდეგ კი შექმენით მეორე სია რომელშიც გადაიტანთ პირველი სიიდან მხოლოდ ლუწ რიცხვებს

my_list = [12, 2309, 123, 2929, 20, 12345]
evens_list = []

for i in my_list:
    if i % 2 == 0:
        evens_list.append(i)

print(evens_list)
