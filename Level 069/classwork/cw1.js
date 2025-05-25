/* 2) მომხმარებელს შემოატანინეთ რიცხვი, შემდეგ შემოატანინეთ არჩევანი(ერთიდან მომხმარებლის რიცხვამდე დაბეჭდოს ლუწი, კენტი, კვადრატი ან 3 ის ჯერადი რიცხვი */

let user_input = prompt("Enter your num: ")

let choice = prompt("pick one: even nums, odd, nums, squares, triple digit")

if (choice == "even") {
    if (choice % 2 == 0) {
        console.log(choice)
    }
}

else if (choice == "squares") {
    console.log(choice ** 2)
}

else if (choice == "triple digit") {
    if (choice % 3 == 0) {
        console.log(choice)
    }
else {
    console.log(choice)
}

}