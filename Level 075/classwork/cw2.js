// 4)შექმნილი ობიექტებიდან გამოიტანეთ მხოლოდ Keyები შემდეგ კი მხოლოდ Valueები //

const obj = {
    name: "Nikolozi",
    age: 25,
    country: "Georgia"
};


const keys = Object.keys(obj);
console.log(keys);

const values = Object.values(obj);
console.log(values);