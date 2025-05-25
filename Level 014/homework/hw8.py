# )შემოატანინეთ მომხმარებელს რიცხვი და დაადგინეთ არის თუ არა დადებითი უარყოფითი ან ნულის ტოლი

user_input = int(input("Enter num: "))

if user_input > 0:
    print("დადებითია")
elif user_input < 0:
    print("უარყოფითია")
else:
    print("ნულის ტოლია")