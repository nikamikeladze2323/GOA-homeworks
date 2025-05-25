let premiumPlayed = false;

document.getElementById("premiumSoundButton").addEventListener("click", function() {
    if (!premiumPlayed) {
        let audio = new Audio("premiumSound.mp3");
        audio.play();
        premiumPlayed = true;
    } else {
        alert("Premium sound უკვე მოისმინეთ!");
    }
});
