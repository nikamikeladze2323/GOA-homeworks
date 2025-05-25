/*  1) შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა სია შემდეგ კი დაბეჭდეთ ამ სიის ჯამი */

function sumArray(numbers) {
    console.log(numbers.reduce((acc, num) => acc + num, 0));
}

sumArray([1, 2, 3, 4, 5]);
