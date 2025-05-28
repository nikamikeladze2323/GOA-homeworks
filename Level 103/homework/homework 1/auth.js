document.getElementById("register").addEventListener("click", function() {
    let name = document.getElementById("regName").value.trim();
    let email = document.getElementById("regEmail").value.trim();
    let password = document.getElementById("regPassword").value.trim();

    if (!name || !email || !password) {
        alert("გთხოვთ შეავსოთ ყველა ველი!");
        return;
    }

    let user = { name, email, password };
    localStorage.setItem(email, JSON.stringify(user));
    alert("რეგისტრაცია წარმატებულია!");
});

document.getElementById("login").addEventListener("click", function() {
    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value.trim();
    let storedUser = JSON.parse(localStorage.getItem(email));

    if (storedUser && storedUser.password === password) {
        localStorage.setItem("loggedInUser", email);
        window.location.href = "orders.html";
    } else {
        alert("არასწორი მონაცემები!");
    }
});
