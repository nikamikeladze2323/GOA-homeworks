/* 4) შექმენით ფორმა, შემდგარი მინიმუმ სამი input-ის. მომხმარებელს შემოატანინეთ სრული სახელი, ემაილი და პაროლი. შემოტანილი მონაცემები გამოიტანეთ საიტზე.

მაგალითი:
<h1>User Data</h1>
<p>Fullname: #{fullname}</p>
... */

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    document.getElementById("displayFullname").textContent = fullname;
    document.getElementById("displayEmail").textContent = email;
    document.getElementById("displayPassword").textContent = password;

    document.getElementById("userForm").reset();
});
