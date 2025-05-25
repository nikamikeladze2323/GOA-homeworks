# 3) მომხმარებელს შემოატანინეთ ორი რიცხვი ხოლო ამის შემდეგ for loop - ის გამოყენებით გამოიტანეთ ამ რიცხვებს შორის ჯამი და ნამრავლი.

first_input = int(input("Enter num: "))
second_input = int(input("Enter num: "))

if first_input < second_input:
    start = first_input
    end = second_input
else:
    start = second_input
    end = first_input

total_sum = 0
total_product = 1

for i in range(start, end +1):
    total_sum += i 
    total_product *= i    

print(start, "-დან", end, "-მდე რიცხვების ჯამი:", total_sum)
print(start, "-დან", end, "-მდე რიცხვების ნამრავლი:", total_product)