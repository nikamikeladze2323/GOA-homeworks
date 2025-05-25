# 3) შექმენით ფუნქცია რომელშიც იქნება რიცხვებით სავსე სია ხოლო ფუნქცია დააბრუნებს ამ სიის ელემენტების ჯამს

def my_list(list1):
    final_list = 0
    for i in list1:
        final_list += i
    return final_list
print(my_list([20, 102, 21, 22]))