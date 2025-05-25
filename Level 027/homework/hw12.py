# 3) შექმენით სია რომელშიც გექნებათ ათიცალი სხვადასხვა რიცხვი შემდეგ კი დაბეჭდეთ ამ სიიდან მხოლოდ 10ზე დაბალი რიცხვები გამოიყენეთ for loop

my_list = [123, 128, 1, 4, 22]

final_list = []

for i in my_list:
    if i < 10:
        final_list.append(i)

print(final_list)