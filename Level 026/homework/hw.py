
ages = [15, 15, 16, 16, 16, 16, 16, 16, 15, 17, 17, 17, 17, 19, 21, 21, 23, 25, 25, 26, 32]


total = 0
count = 0

for age in ages:
    total += age  
    count += 1  
average_age = total / count  

frequency = {}

for age in ages:
    if age in frequency:
        frequency[age] += 1  
    else:
        frequency[age] = 1  

most_common_age = None
highest_frequency = 0

for age in frequency:
    if frequency[age] > highest_frequency:
        most_common_age = age
        highest_frequency = frequency[age]

# შედეგების გამოტანა
print("ჯგუფის საშუალო ასაკი:", average_age)
print("ყველაზე ხშირად შემხვედრი ასაკი:", most_common_age, "გვხვდება", highest_frequency, "ჯერ")
