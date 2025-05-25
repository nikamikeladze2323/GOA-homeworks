/* 3)შექმენით სია, ამ სიაში შეინახეთ String-ტიპის მონაცემები და for-ციკლის გამოყენებით ახალ სიაში დაამატეთ ძველი სიიდან ყოველი სიტყვის პირველი ასო */

let my_list = ["nika", "irakli", "giorgi", "guga", "askili"]
let new_list = []

for (i = 0; i < my_list.length; i++) {
    new_list.push(my_list[i][0])
}

console.log(new_list)