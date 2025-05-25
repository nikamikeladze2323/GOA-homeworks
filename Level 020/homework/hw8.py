# 9) შექმენით ცვლადები და დააჯამეთ ლუწი და კენტი რიცხვები სიიდან


numbers = [5, 10, 15, 20, 25, 30, 35, 40]

sum_evens = 0
sum_odds = 0

for i in numbers:
    if i % 2 == 0:
        sum_evens += i
    else:
        sum_odds += i


print(sum_evens, "evens sum")
print(sum_odds, "odds sum")