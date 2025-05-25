# 10) დაბეჭდეთ 1 დან 100 მდე დაბეჭდეთ მხოლოდ ის რიცხვები რომლებიც 3 ჯერადიც არის და 5 ჯერადიც

count = 1
while count < 100:
    count = count + 1
    if count % 3 == 0:
        print(count)
    elif count % 5 == 0:
        print(count)
    else:
        pass