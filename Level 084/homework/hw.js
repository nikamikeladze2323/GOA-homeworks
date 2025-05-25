// 1)დღეს ახსნილი მასალის გამოყენებით გააკეთეთ, საიტზე მოძრავი ელემენტი კლავიატურის ისრების საშუალებით, შექმენით ერთი ელემენტი რომლის საიტზე ჰორიზონტალურადაც და ვერტიკალურადაც ამოძრავებას შეძლებთ, ისრების გამოყენებით ,  ასევე დაამატეთ სტილი რათა იყოს ლამაზი და smooth

const box = document.querySelector('.box');
let positionX = window.innerWidth / 2 - 25;  
let positionY = window.innerHeight / 2 - 25; 
const speed = 10; 

box.style.transform = `translate(${positionX}px, ${positionY}px)`;

document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowUp':
            positionY -= speed;
            break;
        case 'ArrowDown':
            positionY += speed;
            break;
        case 'ArrowLeft':
            positionX -= speed;
            break;
        case 'ArrowRight':
            positionX += speed;
            break;
    }
    box.style.transform = `translate(${positionX}px, ${positionY}px)`;
});
