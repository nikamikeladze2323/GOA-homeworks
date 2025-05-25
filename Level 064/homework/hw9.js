// 9)შემოიტანე 1 input და 1 ცლადი შეადარე, არის თუ არა ერთი რიცხვი მეორეზე ნაკლები ან ტოლი.

let input = prompt("Enter num: ")
let input1 = prompt("Enter second num: ")

if (input < input1) {
    console.log("ნაკლებია")
}

else if (input > input1) {
    console.log("მეტია")
}

else {
    console.log("ტოლია")
}