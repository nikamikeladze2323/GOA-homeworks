def letter_position(name):
    first_letter = name[0].lower()  
    position = ord(first_letter) - ord('a') + 1  
    return position

user_name = input("რა არის თქვენი სახელი? ")
result = letter_position(user_name)
print(f"{user_name}-ის პირველი ასო არის {result}-ე ანბანში.")
