const colors = ["red", "green", "blue"];

// გამოიყენე დესტრუქცია ისე, რომ მიიღო პირველი ორი ფერი ცვლადებში firstColor და secondColor

const [firstColor, secondColor] = colors;
console.log(firstColor, secondColor); 

const user = {
  name: "Giorgi",
  age: 25,
  country: "Georgia"
};

// გამოიყენე დესტრუქცია name და country-ს გამოსატანად ცვლადებში

const [name, country] = user;
console.log(name, country); 


const person = {
  name1: "Nino",
  age: 28
};

// გამოიყენე დესტრუქცია და მიანიჭე default მნიშვნელობა "Unknown" ცვლადს country, თუ ის არ არსებობს

const [name1, age, country1 = "Unknown" ] = person;
console.log(name1, age, country1); 


const printUser = ([name2, age2 ]) => {
  console.log(`${name2} is ${age2} years old`);
};

printUser({name2: "Ana", age2: 22}); 
