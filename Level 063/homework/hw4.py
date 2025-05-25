# 4) შექმენი ორი input შეადარე ორი რიცხვი და დაბეჭდე შედეგი.

first = int(input("num: "))
second = int(input("num: "))

if first > second:
    print(f"{first} > {second}")
elif first < second:
    print(f"{first} < {second}")
else:
    print(f"{first} = {second}")