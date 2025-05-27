// 3) შექმენით სია სადაც შეინახავთ რანდომ სახელებეს , map-ის გამოყენებით მიწვდით თითოეულ ელემენტს სიაში და დააბუნეთ ახალი განახლებული სია სადაც იქნება ყველა სახელი დიდი ასოებით დაწეილი

const names = ["nika", "luka", "ana", "mari", "gio"]; 

const upperCaseNames = names.map(name => name.toUpperCase()); 

console.log(upperCaseNames); 
