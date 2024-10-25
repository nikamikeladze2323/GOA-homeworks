def is_prime(number):
    if number <= 1:
        return False
    for i in range(2, int(number ** 0.5) + 1):
        if number % i == 0:
            return False
    return True
def filter_primes(numbers):
    return [num for num in numbers if is_prime(num)]
print(filter_primes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))  
