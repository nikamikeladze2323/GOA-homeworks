# 3) შექმენით სია სადაც შეინახავთ სახელებს, და დაასორტირეთ ეს სია ისე რომ ყველაზე მეტი ასო სადაც იქნება ჯერ ეგ რომ იყოს

my_list = ["gio", "no_way", "bla", "im_not_black"]

my_list.sort(key=len, reverse=True)

print(my_list)