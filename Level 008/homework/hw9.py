# დაწერე პროგრამა, რომელიც ამოწმებს, არის თუ არა რიცხვი ლუწი ან 3-ის ჯერადი.

num = int(input("Enter num: "))

if num % 2 == 0:
    print("even")
elif num % 3 == 0:
    print("ჯერადია")
else:
    print("არცერთი არ არის")