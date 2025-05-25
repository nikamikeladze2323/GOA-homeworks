// 1)HTML-ში შექმენით რამდენიმე ელემენტი , შემდეგ  javasCript-იდან გაუწერეთ ისეთი ლოგიკა რომ,რომელ ელემენტსაც დააკლიკებთ ,ამ ელემენტის ტექსტის ფერი გახდეს წითელი ასევე კონსოლში დაბეჭდოს ამ კონკრეტული ელემენტის ინფორმაცია(აუცილებლად გამოიყენეთ დღეს ახსნილი event object)

document.querySelectorAll('.clickable').forEach(element => {
    element.addEventListener('click', function(event) {
        event.target.style.color = 'red';
        
        console.log('Clicked element info:', event.target);
    });
});
