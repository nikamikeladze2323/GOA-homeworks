/* 1) შექმენით ფუნქცია, რომელიც მიიღებს n რაოდენობის რიცხვს და გაიგებს მათ ჯამს.

ფუნქციას გამოძახებისას უნდა გადასცეთ მინიმუმ 5 არგუმენტი. პირველი და მეორე არგუმენტები შეინახეთ ცვლადებში და დაბეჭდეთ მათი ნამრავლი, ხოლო სხვა დანარჩენი rest ოპერატორის გამოყენებით ჩასვით სიაში და დაბეჭდეთ მათი ჯამი */ 


const SumOfNumbers = (one, two, ...numbers) => {
    let SumOfOneAndTwo = one * two;

    console.log(SumOfOneAndTwo, ...numbers);
};


SumOfNumbers(...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
