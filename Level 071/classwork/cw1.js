/* 2) შექმენით სია სადაც იქნება 10 რენდომ რიცხვი, შემდეგ კი დაითვალეთ ამ სიის რიცხვების ჯამი for loop ის გამოყენებით */

let my_list = [12, 23, 22, 10, 12, 2, 7, 3, 9, 1]

let sum_of_num = 0

for (i = 0; i < my_list.length; i++) {
    sum_of_num += my_list[i];
}

console.log(sum_of_num)
