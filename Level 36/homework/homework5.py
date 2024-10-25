def square_numbers(numbers):
    if not numbers:
        return []
    return [numbers[0] ** 2] + square_numbers(numbers[1:])
print(square_numbers([30, 12, 44, 23]))

