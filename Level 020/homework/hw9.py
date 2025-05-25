# 10) დაითვალე დადებითი და უარყოფითი რიცხვების ჯამი სიიდან

numbers = [5, -10, 15, -20, 25, -30, 35, -40]


sum_positive = 0  
sum_negative = 0  

for num in numbers:
    if num > 0: 
        sum_positive += num
    elif num < 0:  
        sum_negative += num

print(sum_positive)
print(sum_negative)