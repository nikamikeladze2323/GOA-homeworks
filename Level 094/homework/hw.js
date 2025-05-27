// 1) შექმენით სია სადაც რენდომულად შეიტანთ რიცხვებს , შემდეგ დაწეეთ ფუნქცია რომელიც გადაუვლის თითოეულ ელემენტს სიაში და დააბრუნებს ახალ სიას სადაც იქნება მხოლოდ ლუწი რიცხვები , ასევე შექმენით იგივენაირი მეორე ფუნქცია კენტი რიცხვებისთვის

const numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)); 

const evenNumbers = numbers.filter(num => num % 2 === 0);

const oddNumbers = numbers.filter(num => num % 2 !== 0);

console.log("Original list:", numbers);
console.log("Even numbers:", evenNumbers);
console.log("Odd numbers:", oddNumbers);
