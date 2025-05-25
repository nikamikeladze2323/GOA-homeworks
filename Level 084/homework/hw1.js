// 2)ჩართეთ თქვენი ფანტაზია და ნასწავლი მასალის გამოყენებით შექმენით რაიმე საინტერესო და ლამაზი,ვისიც ყველაზე მეტად მომეწონება დაეწერება შესაბამისი Aura. წარმატებები

const box = document.querySelector('.magic-box');
let positionX = window.innerWidth / 2 - 50;  
let positionY = window.innerHeight / 2 - 50; 
const speed = 15; 

box.style.transform = `translate(${positionX}px, ${positionY}px)`;

document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowUp': positionY -= speed; break;
        case 'ArrowDown': positionY += speed; break;
        case 'ArrowLeft': positionX -= speed; break;
        case 'ArrowRight': positionX += speed; break;
    }
    box.style.transform = `translate(${positionX}px, ${positionY}px)`;
});

// დაჭერით ღილაკის გაფართოება და შემოკლება
box.addEventListener('click', function() {
    box.style.transform += ' scale(1.2)';
    setTimeout(() => box.style.transform = `translate(${positionX}px, ${positionY}px)`, 200);
});
