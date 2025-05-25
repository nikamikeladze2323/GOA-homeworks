# 1) ერთიდან 50 მდე დაბეჭდეთ რიცხვების საშუალო არითმეტიკული

sum_nums = 0 
count_nums = 0  

for i in range(1, 50):  
    sum_nums += i  
    count_nums += 1  

average = sum_nums // count_nums 

print(average)