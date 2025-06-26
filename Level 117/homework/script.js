const bmwInfo = document.getElementById('bmw');
const zhiguliInfo = document.getElementById('Zhiguli');
const porsheInfo = document.getElementById('porshe');


audioBmw = () => {
    let audio = new Audio('2025-06-24 19-04-14 (mp3cut.net).mp3');
    audio.play()
}

const textbmw = () => {
    document.createElement('p');
    textbmw.textContent = 'ტექსტი';
    document.getElementById('bmw').appendChild(textbmw);
}

audioZhiguli = () => {
    let audio1 = new Audio('2025-06-24 19-16-28 (mp3cut.net).mp3');
    audio1.play()
}

const textZhiguli = () => {
    document.createElement('p');
    textZhiguli.textContent = 'ssds';
    document.getElementById('Zhiguli').appendChild(textZhiguli)
}

audioporshe = () => {
    let audio2 = new Audio('2025-06-24 19-33-59 (mp3cut.net).mp3');
    audio2.play()
}

const textporshe = () => {
    document.createElement('p');
    textporshe.textContent = 'ssds';
    document.getElementById('porshe').appendChild(textporshe)
}


bmwInfo.addEventListener('click', () => {
    audioBmw()
    textbmw()
}) 

zhiguliInfo.addEventListener('click', () => {
    audioZhiguli()
    textZhiguli()
})

porsheInfo.addEventListener('click', () => {
    audioporshe()
    textporshe()
})
