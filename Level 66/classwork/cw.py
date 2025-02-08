def func(my_list):
    my_second_list = []
    for i in my_list:
        my_second_list.append(str(i))
    
    print(" ".join(my_second_list))

func(230, 293, 340, 434)