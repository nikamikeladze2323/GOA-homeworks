// 8) მომხარებელს შემოატანინე input შეამოწმე, არის თუ არა რიცხვი 10-ზე მეტი ან ტოლი.

let input = prompt("Enter num: ")

if (input < 10) {
    console.log("ნაკლებია")
}

else if (input > 10) {
    console.log("მეტია")
}

else {
    console.log("ტოლია")
}