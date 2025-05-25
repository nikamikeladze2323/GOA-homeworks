// 1)შექმენით რამდენიმე თეგი HTML-ში და javascript-ის გამოყენებით მიეცით სასურველი სტილები და შეუცვალეთ კონტენტი //
function changeContent() {
    document.getElementById("h1").innerText = "JavaScript-ით შეცვლილი სათაური!";
    document.getElementById("p").innerText = "ტექსტი წარმატებით შეიცვალა!";
}

function changeStyle() {
    let h1 = document.getElementById("h1");
    let p = document.getElementById("p");

    h1.style.fontSize = "24px";
    h1.style.color = "blue";
    h1.style.padding = "10px";
    h1.style.border = "2px solid black";

    p.style.fontSize = "18px";
    p.style.color = "red";
    p.style.fontStyle = "italic";
}

document.getElementById("h1").innerText = "JavaScript-ით შეცვლილი სათაური!";
document.getElementById("p").innerText = "ტექსტი შეიცვალა!";
