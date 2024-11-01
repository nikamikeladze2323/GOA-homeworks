def find_max(numbers):
    if not numbers:
        return None  
    min_number = numbers[0]
    for number in numbers:
        if number < min_number:
            min_number = number
    return min_number

numbers = [120, 392, 493, 102, 320, 220, 100, 1200, 300, 1204]
result = find_max(numbers)
print(f"უმცირესი რიცხვი არის: {result}")