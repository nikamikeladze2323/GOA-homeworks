# 2)  შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა რიცხვებით სავსე სია ამ ფუნქციამ კი უნდა დააბრუნოს ამ სიის რიცხვების ჯამი

def fun(my_list):
    final_list = 0

    for i in my_list:
        final_list += i
    return final_list

print(fun(([201, 239, 12, 212])))