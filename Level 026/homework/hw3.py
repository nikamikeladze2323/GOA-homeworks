# 5) შექმენით სია რომელშიც იქნება მოთავსებული რენდომ რიცხვები შემდეგ კი ამ სიიდან ამოშალეთ ყველა ლუწი რიცხვი

my_list = [12, 2309, 123, 2929, 20, 12345]
evens_list = []
odds_list = []

for i in my_list:
    if i % 2 == 0:
        evens_list.append(i)
    else:
        odds_list.append(i)
print(odds_list)