# 4) ერთიდან 100 მდე დაბეჭდეთ ყველა რიცხვი თან გვერძე მიუწერეთ ლუწია თუ კენტი while loop ის გამოყენებით

count = 0
while count < 100:
    count = count + 1
    if count % 2 == 0:
        print(count, "even")
    else:
        print(count, "odd")