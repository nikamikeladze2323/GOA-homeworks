# 3) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი მომხარებლის შემოტანილ რიცხვამდე დაბეჭდეთ ყველა რიცხვის საშუალო არითმეტიკული

num = int(input("Enter num: "))

sum_nums = 0 
count_nums = 0  

for i in range(1, num):  
    sum_nums += i  
    count_nums += 1  

average = sum_nums // count_nums 

print(average)