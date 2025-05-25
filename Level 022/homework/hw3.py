# 4) შექმენით 3 ცრილი სამივე იქნება განსხვავებული მონაცემთა ტიპიები  | ბოლეანი არა საჭირო | და შექმენით ცარიელი ცხრილი სადაც იქნება 
# დასაწყისში ინტეჯერების ცხრილი  სტრინგების ცხრილი და მერე ფლოათების ცხრილი

integer_list = [1, 2, 3, 4, 5] 
string_list = ["Apple", "Banana", "Cherry", "Date", "Elderberry"]  
float_list = [1.5, 2.7, 3.14, 4.56, 5.89]  

data_table = {
    "Integers": integer_list,
    "Strings": string_list,
    "Floats": float_list
}

for key in data_table:
    print(key, ": ", data_table[key])
