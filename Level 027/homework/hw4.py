# 5) დაწერეთ პროგრამა რომელიც ბეჭდავს ყველა რიცხვს 1-100 მდე რომელიც იყოფა 3-ზე და 5-ზე while loop:

count = 0
while count < 100:
    count = count + 1
    if count // 3 or count // 5:
        print(count)