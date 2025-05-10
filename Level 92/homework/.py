def sort(words):
    return sorted(words, key=lambda word: word.count('a'))

print(sort(["apple", "banana", "grape", "avocado", "mango"]))

