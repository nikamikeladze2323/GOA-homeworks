def sortlen(word):
    word1 = word.split()
    return sorted(word1, key=len, reverse=True)
print(sortlen("I like my cheesey drippy bro ნიკა მიქელაძე"))