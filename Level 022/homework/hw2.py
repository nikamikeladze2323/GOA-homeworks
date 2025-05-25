# 3 ) გააკეთეთ სია სადაც იქნება 10 ინტეჯერი , ინტეჯერები რომელიბ იქნება 10 ზე ნაკლები append ის დახმარებით შეიყვანეთ ახალ ცხრილში

nums = [2, 11, 1, 120, 3, 8, 23, 6, 20]
final_nums = []

for i in nums:
    if i < 10:
        final_nums.append(i)

print(final_nums)


