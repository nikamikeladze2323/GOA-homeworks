// 2)შექმენით სია სადაც გექნებათ რენდომ რიცხვები , შემდეგ ამ რიცხვებს გაფილტრავთ და ამოიღებთ მხოლოდ უარყოფით რიცხვებს , შემდეგ ამ სიას გადამაპავთ და თითოეულ ელემენტს გადააქცევთ დადებით რიცხვად

const numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 200) - 100); 

const negativeNumbers = numbers.filter(num => num < 0);

const positiveNumbers = negativeNumbers.map(num => Math.abs(num));

console.log("Original numbers:", numbers);
console.log("Negative numbers:", negativeNumbers);
console.log("Converted to positive:", positiveNumbers);
