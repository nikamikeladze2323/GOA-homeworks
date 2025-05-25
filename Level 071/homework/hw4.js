/* 5)Splice მეთოდის გამოყენებით ჩაანაცვლეთ სიაში ყველა უარყოფითი რიცხვი 0 - ით */

let my_list = [3, -7, 12, -2, 8, -10, 5, -1]

for (i = 0; i < my_list.length; i++) {
    if (my_list[i] < 0) {
        my_list.splice(i, 1, 0)
    }
}

console.log(my_list)