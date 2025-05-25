/* 2)for-ციკლის გამოყენებით იპოვეთ სიაში ყველაზე დიდი და ყველაზე პატარა რიცხვები */

let my_list = [12, 28, 30, 50, 70, 100]

let min = my_list[0]
let max = my_list[0]

for (let i = 1; i < my_list.length; i++) {
    if (my_list[i] < min) {
        min = my_list[i]
    }

    else if (my_list[i] > max) {
        max = my_list[i]
    }
}

console.log(min)
console.log(max)