# 1) შექმინთ 2 სია  , პირველი სია ინქება ცარიელი  ხოლო მეროე სია ინქება სახელებით სავსე მინიმუმ 5 , თქვენი დავალებაა ამ სიიდან  ჩაამოტომ მეორე სიაში სახელელბი რომელიც  4 სიმბოლოზე ნაკლებია

my_list = ["nika", "dachi", "giorgi", "guga", "nikusha"]
my_list1 = []
for i in my_list:
    if len(i) < 4:
        my_list1.append(i)
   
print(my_list1)
print(my_list) 