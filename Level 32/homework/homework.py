my_list = [5, 30, 50, 70, 10, 20, 55]
max = my_list[0]
for i in range(len(my_list)):
    if max < my_list[i]:
        max = my_list[i]

print("max:", str(max))