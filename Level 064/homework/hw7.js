// 7)შემოიტანე 2 input შეამოწმე, არის თუ არა ორი რიცხვის ჯამი 100-ზე მეტი.

let input = prompt("Enter num: ")
let input1 = prompt("Enter second num: ")

sum = input + input1

if (sum < 100) {
    console.log("ნაკლებია")
}

else if (sum > 100) {
    console.log("მეტია")
}

else {
    console.log("ტოლია")
}