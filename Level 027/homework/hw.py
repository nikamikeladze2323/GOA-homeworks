# 1) for ციკლის მეშვეობით შეასრულეთ ყველა მათემატიკური ოპერაცია 0-დან 100-მდე რიცხვებზე 

sum_result = 0
product_result = 1
difference_result = 0
division_result = 0

for num in range(101):
    sum_result += num        
    difference_result -= num 
    if num != 0:
        product_result *= num 
        division_result /= num 


print("0-100 რიცხვების ჯამი:", sum_result)
print("0-100 რიცხვების სხვაობა:", difference_result)
print("0-100 რიცხვების ნამრავლი:", product_result)
print("0-100 რიცხვების გაყოფის შედეგი:", division_result)
