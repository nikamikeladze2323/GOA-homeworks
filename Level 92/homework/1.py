def sortvowel(words):
    vowels = ['a', 'e', 'i', 'o', 'u']
    return sorted(words, key=lambda x: sum(1 for char in x.lower() if char in vowels), reverse=True)

print(sortvowel(["weiujw", "iaskal", "aisuoi", "iasko",]))