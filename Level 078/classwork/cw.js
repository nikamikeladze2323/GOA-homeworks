// 1)შექმენით დოკუმენტში რამდენიმე ერთნაირი ელემენტი და querySelector()ის და  querySelectorAll() ის გამოყენებით javascript-იდან შეუცვალეთ სტილები //

document.querySelector('.box').style.backgroundColor = 'red'; 

document.querySelectorAll('.box').forEach(box => {
    box.style.border = '2px solid black'; 
});
