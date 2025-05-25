# 7) დაბეჭდეთ 100 დან 200 მდე ყველა რიცხვი გვერძე კი მიუწერეთ ლუწია თუ კენტი გამოიყენეთ while loop და if else
count = 100
while count < 200:
    count = count + 1
    if count % 2 == 0:
        print(count, "ლუწია")
    else:
        print(count, "კენტია")