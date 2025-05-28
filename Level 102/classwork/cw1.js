// 2) დაამატეთ საიტზე ღილაკი როდესაც ამ ღილაკს დააჭერთ მომხმარებელს შემოატანინეთ სახელი, გვარი, ასაკი და მეილი ამ მონაცემების შექმენით ობიექტი შეგიძლიათ გამოიყენოთ კონსტრუქტორი, ეს ობიექტი დაამატეთ სიაში და შექმენით ექაუნთები, ეს ინფორმაცია უნდა ინახებოდეს localstorage ში, ყოველ ღილაკზე დაჭერის დროს უნდა შეიქმნას ახალი ექაუნთი(ობიექტი), დაემატოს ექაუნთებისთვის განკუთვნილ სიაში და განახლდეს localstorage

document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById("nameInput");
    const surnameInput = document.getElementById("surnameInput");
    const ageInput = document.getElementById("ageInput");
    const emailInput = document.getElementById("emailInput");
    const createAccountBtn = document.getElementById("createAccount");
    const accountList = document.getElementById("accountList");

    class Account {
        constructor(name, surname, age, email) {
            this.name = name;
            this.surname = surname;
            this.age = age;
            this.email = email;
        }
    }

    function loadAccounts() {
        const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
        accountList.innerHTML = "";
        accounts.forEach(account => {
            let li = document.createElement("li");
            li.textContent = `${account.name} ${account.surname} - ასაკი: ${account.age}, მეილი: ${account.email}`;
            accountList.appendChild(li);
        });

        console.log("LocalStorage:", accounts); 
    }

    createAccountBtn.addEventListener("click", function() {
        let name = nameInput.value.trim();
        let surname = surnameInput.value.trim();
        let age = ageInput.value.trim();
        let email = emailInput.value.trim();

        if (name === "" || surname === "" || age === "" || email === "") {
            alert("გთხოვთ შეიყვანოთ ყველა ველი!");
            return;
        }

        let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
        let newAccount = new Account(name, surname, age, email);
        accounts.push(newAccount);
        localStorage.setItem("accounts", JSON.stringify(accounts));

        loadAccounts(); 
        nameInput.value = "";
        surnameInput.value = "";
        ageInput.value = "";
        emailInput.value = ""; 
    });

    loadAccounts();
});
