// 11) მომხმარებელს შემოატანინეთ პაროლი შემდეგ კითხეთ ხელახლა რომ გაიმეოროს პაროლი და შეამოწმეთ უდრის თუ არა ისინი ერთმანეთს

let input = prompt("Enter your password: ")
let input1 = prompt("Enter your password second time: ")

if (input != input1) {
    console.log("wrong")
}

else {
    console.log("right")
}