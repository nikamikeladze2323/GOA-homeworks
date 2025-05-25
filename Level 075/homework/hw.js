// 1)შექმენით ობიექტი car , რომელსაც ექნება 5 key -  company(მწარმოებელი) , model , milage ,year , condition , ამ ობიექტში ასევე უნდა იყოს შენახული ფუნქცია , ამ ფუნქციას პარამეტრად ჰქონდეს condition ,და ამ ფუნქციაში შეამოწმეთ , რომ თუ condition-არის კარგი ან ცუდი დაბეჭდეთ შემდეგი ტექსტი car is in {condition} condition გამოიყენეთ format-ი //

const car = {
    company: "Toyota",
    model: "Camry",
    mileage: 120000,
    year: 2018,
    condition: "good",
    checkCondition: function(condition) {
        if (condition === "good" || condition === "bad") {
            console.log(`Car is in ${condition} condition.`);
        } else {
            console.log("Condition status is unclear.");
        }
    }
};

car.checkCondition(car.condition); 
