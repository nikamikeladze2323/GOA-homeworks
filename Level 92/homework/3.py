def sortthree(num):
    return sorted(num, key=lambda x: str(x).count('3'), reverse=True)

print(sortthree([33, 3, 333, 43, 321, 30, 13, 33339]))