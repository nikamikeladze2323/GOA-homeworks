// 1) დაამატეთ საიტზე ღილაკი როდესაც ამ ღილაკს დააჭერთ მომხმარებელს შემოატანინეთ სახელი და მიღებული დაამატეთ სიაში და ეს სია შეინახეთ localstorage ში, ყოველ ღილაკზე დაჭერის დროს და ახალი სახელის შეყვანის დროს სიაში დაემატოს ახალი ელემენტი და localstorage ში განახლდეს ინფორმაციას ხოლო ამის შემდეგ კონსოლში დაბეჭდეთ localstorage დან წამოღებული ინფორმაცია

document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById("nameInput");
    const addNameBtn = document.getElementById("addName");
    const nameList = document.getElementById("nameList");

    function loadNames() {
        const names = JSON.parse(localStorage.getItem("names")) || [];
        nameList.innerHTML = "";
        names.forEach(name => {
            let li = document.createElement("li");
            li.textContent = name;
            nameList.appendChild(li);
        });

        console.log("LocalStorage:", names); 
    }

    addNameBtn.addEventListener("click", function() {
        let name = nameInput.value.trim();
        if (name === "") return;

        let names = JSON.parse(localStorage.getItem("names")) || [];
        names.push(name);
        localStorage.setItem("names", JSON.stringify(names));

        loadNames(); 
        nameInput.value = ""; 
    });

    loadNames(); 
});
