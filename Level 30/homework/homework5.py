#numbers = [3, 5, 2, 8, 9, 20, 71, 23, 10, 12, 44, 67, 33, 54, 15, 16, 18, 19, 22, 20]

#even_numbers = []
#odd_numbers = []

#for i in range(len(numbers)):
    
    #if numbers[i] % 2 == 0:
        #numbers.append(even_numbers)
        #print("ლუწი რიცხვები:", len(even_numbers))
    #else:
        #numbers.append(odd_numbers)
        #print("კენტი რიცხვები:", len(odd_numbers))



numbers = list(range(1, 21))

even_numbers = []
odd_numbers = []

for number in numbers:
    if number % 2 == 0:
        even_numbers.append(number)
    else:
        odd_numbers.append(number)

print("საწყისი სია:", numbers)
print("ლუწი რიცხვები:", even_numbers)
print("კენტი რიცხვები:", odd_numbers)

