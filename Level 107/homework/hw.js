// 2) კომენტარებით ახსენით რა არის Rest & Spread ოპერატორები და რა განსხვავებაა მათ შორის

// ...rest საშუალებას იძლევა, რომ ფუნქციამ მიიღოს გაუთვალისწინებელი რაოდენობის არგუმენტები და შეინახოს ისინი მასივში.

const fun = (one, two, ...numbers) => {
    let sumOfNums = 0;
    for (num of numbers) {
        sumOfNums += num;
    }
    console.log(sumOfNums);
    console.log(one);
    console.log(two);
}

fun(...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// spread ოპერატორი ... საშუალებას გაძლევს, გახსნას მასივები, ობიექტები და სხვა ელემენტები ცალკეულ კომპონენტებად. ასევე ის გვეხმარება ობიექტების და სიიების გაერთიანებაში

const obj = {
    name: "nikolozi",
    secondName: "miqeladze",
    age: "15", 
}

const secondObj = {
    name1: "giorgi",
    age1: "18"
}

const mergedObj = {...obj, ...secondObj}

console.log(mergedObj);

const myList = [12, 33, 44, 62, 10]

console.log(...myList)

// 3) შექმენით ობიექტი მინიმუმ 3 კუთვნილებით(name, age, height). გამოიყენეთ ამ ობიექტზე დესტრუქცია ისე, რომ name კუთვნილება შეინახოს ცვლადში, ხოლო დანარჩენი კუთვნილებებისგან შეიქმნას ახალი ობიექტი(დაგჭირდებათ rest ოპერატორი)

const myFun = ({name2, ...OBJ}) => {
    console.log(OBJ);
    console.log(name2);
}

myFun({name2: "nika", age2: 20, height: 180})

// 4) შექმენით 3 ობიექტი, შემდეგ შექმენით ახალი ობიექტი, სადაც ჩააკოპირებთ სამივე მათგანს.(გამოიყენეთ spread ოპერატორი)

const Obj = {
    nameN3: "nika",
    ageN3: 15
}

const oBj = {
    nameD3: "dachi",
    ageD3: 15
}

const obJ = {
    nameG3: "giorgi",
    ageG3: 15
}

const mergedOBJ = {...oBj, ...Obj, ...obJ};

console.log(mergedOBJ);

// 5) შექმენით ფუნქცია, რომელიც მიიღებს n რაოდენობის სახელს და დაბეჭდავს მათ. შემდეგ შექმენით სახელების სია, დაშალეთ ის და გადაეცით არგუმენტად შექმნილ ფუნქციას.(დაგჭირდებათ reast & spread ოპერატორები)


const printNames = (...names) => {
    console.log(names);
};


printNames(...["nika", "giorgi", "mari", "ana", "luka"]);


