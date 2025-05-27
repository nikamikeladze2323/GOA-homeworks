// 2)შექმენით სია სადაც გექნებათ 5 ობიექტი , ამ ობიექტებში შეინახავთ მომხმარებლის სახელს და ასაკს , თქვენი დავალებაა გაფილტროთ ეს სია და დატობოთ მხოლოდ იმ მომხმარებლის ობიექტები ვისი ასაკიც მეტი ან ტოლი იქნება 18 ზე

const users = [
    { name: "Giorgi", age: 16 },
    { name: "Nino", age: 22 },
    { name: "Luka", age: 18 },
    { name: "Ana", age: 25 },
    { name: "Davit", age: 15 }
];

const adultUsers = users.filter(user => user.age >= 18);

console.log(adultUsers);

