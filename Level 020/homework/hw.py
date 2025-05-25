# 1) შექმენით სია რომელშიც იქნება 15 ელემენტი შემდეგ გამოიტანეთ სიის ყველა ელემენტი while loop-ის გამოყენებით და ასევე for loop-ითაც

# ქართული სახელების სია
georgian_names = ["ნიკოლოზი", "გიორგი", "დავითი", "ლევანი", "თედო", "ბექა", "ზვიადი", "ელენე", "თამარი", "ქეთევანი", "მარიამი", "ნანა", "სალომე", "ნინო", "სოფიო"]

i = 0
while i < len(georgian_names):
    i += 1
    print(georgian_names[i])

for georgian_name in georgian_names:
    print(georgian_name)
     

