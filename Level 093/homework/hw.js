// Day 93: აუცილებლად გააკეთეთ დღევანდელი პროექტი ყველამ , countdown timer , დაამატეთ სასურველი დიზაინი ლოგიკა და ა.შ.

const countdown = document.querySelector("#p");
let timeLeft = 10; 

function updateTimer() {
  countdown.textContent = timeLeft;
  if (timeLeft > 0) {
    timeLeft--;
    setTimeout(updateTimer, 1000); 
  } else {
    countdown.textContent = "Time's up!";
  }
}

updateTimer(); 
