# დაწერე პროგრამა, რომელიც ამოწმებს, არის თუ არა რიცხვი ერთდროულად 50-ზე ნაკლები და 10-ის ჯერადი.

num = int(input("Enter num: "))

if num < 50 % 10 == 0:
    print("ერთდროულად 50-ზე ნაკლებია და 10-ის ჯერადია")