// გააკეთეთ რეგისტრაცია და ლოგინი local storage ის გამოყენებით

document.getElementById("register").addEventListener("click", function() {
    let name = document.getElementById("regName").value.trim();
    let email = document.getElementById("regEmail").value.trim();
    let password = document.getElementById("regPassword").value.trim();

    if (name === "" || email === "" || password === "") {
        alert("გთხოვთ შეავსოთ ყველა ველი!");
        return;
    }

    let user = { name, email, password };
    localStorage.setItem(email, JSON.stringify(user));

    alert("რეგისტრაცია წარმატებით დასრულდა!");
});

document.getElementById("login").addEventListener("click", function() {
    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value.trim();
    let message = document.getElementById("message");

    let storedUser = JSON.parse(localStorage.getItem(email));

    if (storedUser && storedUser.password === password) {
        message.textContent = "შესვლა წარმატებულია! 🎉";
        message.style.color = "green";
    } else {
        message.textContent = "შეცდომა! არასწორი მონაცემები.";
        message.style.color = "red";
    }
});
