my_list = ["giorgi", "jemaliko", "gabrieli", "nugzariko1"]
for i in range(len(my_list)):
    if len(my_list[i]) >= 10:
        my_list.pop()
        my_list.append("nikolozi")
        print(my_list)
        