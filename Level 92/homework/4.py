def sortg(words):
    return sorted(words, key=lambda x: (not x.startswith('g'), x))

print(sortg(["nika", "dachi", "jemala", "gugzara", "salome"]))
