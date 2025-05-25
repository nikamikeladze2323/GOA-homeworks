const button = document.getElementById('color-button');
const colorCode = document.getElementById('color-code');
const clickSound = document.getElementById('click-sound');

button.addEventListener('click', () => {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    colorCode.textContent = newColor;
    
    clickSound.play("click.mp3"); 
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 6; i > 0; i--) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
