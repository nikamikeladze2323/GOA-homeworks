# 7) შექმენით ახალი სია მხოლოდ ლუწი რიცხვების ერთი დიდი სიიდან 

my_list = [2193, 2220, 1128, 1121, 343567, 2392]

final_list = []

for i in my_list:
    if i % 2 == 0:
        final_list.append(i)

print(final_list)