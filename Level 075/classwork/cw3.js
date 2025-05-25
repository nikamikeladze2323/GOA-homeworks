// 5)შექმნილ ობიექტს გადაუარეთ for ციკლით და გამოიტანეთ key და value შემდეგი ფორმატით: "{key} is {value}" // 

const obj = {
    name: "Nikolozi",
    age: 25,
    country: "Georgia"
};

for (i = 0; i < obj.length; i++) {

    const keys = Object.keys(obj[i]);
    const values = Object.values(obj[i]);

    console.log(`${keys} is ${values}`);
}



