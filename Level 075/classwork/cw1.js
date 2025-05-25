// 3)Prompით მომხმარებელს შემოატანინეთ მისი სახელი, გვარი, ასაკი და ჰობი, შემდეგ ეს ინფორმაცია შეინახეთ ობიექტში, ასევე ამ ობიექტს დაუმატეთ ფუნქცია, რომლის გამოძახებაზეც კონსოლში გამოიტანს "Welcome {name}" //

const fun = list => {
    let input = prompt("Enter your name: ")
    let input1 = prompt("Enter your surname: ")
    let input2 = prompt("Enter your age: ")
    let input3 = prompt("Enter your hobbie: ")
    
    list = {
        name: input,
        surname: input1,
        age: input2,
        hobbies: input3
    }
    console.log(list)
}

fun()
