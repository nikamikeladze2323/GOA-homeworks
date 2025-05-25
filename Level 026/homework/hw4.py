# 6) შექმენით სია რომელშიც იქნება სახელები შემდეგ კი შექმენით პროგრამა რომელიც ამოშლის ყველა სახელს რომელიც "t" ასოზე იწყება და ჩაამატებს ახალ სიაში

my_list = ["nika", "dachi", "tgiorgi", "tguga", "tnikusha"]

filtered_names = []

for name in my_list:
    if name[0] != "t":
        filtered_names.append(name)


print(filtered_names)


        