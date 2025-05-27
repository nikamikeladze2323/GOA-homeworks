// 3)შექმენით ფუნქცია რომელიც სიიდან ამოიღებს ყველა ელემენტს და დააბრუნებს ახალ სიას სადაც მხოლოდ 5 სიმბოლოზე მეტი სიტყვები მოხვდებიან

const filterLongWords = arr => arr.filter(word => word.length > 5);

const words = ["hello", "world", "JavaScript", "code", "amazing", "fun", "developer"];

console.log(filterLongWords(words)); 
