# 4) დაწერეთ ალგორითმი, რომელიც მომხმარებელს შეეკითხება რიცხვს. თუ რიცხვი ლუწია გაყავით ორზე, სხვა შემთხვევაში გაამრავლეთ სამზე და მიუმატეთ ერთი.

num = int(input("enter num: "))

if num % 2 == 0:
    print(num // 2)
else:
    print((num * 3) + 1)

