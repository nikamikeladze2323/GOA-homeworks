// 5) შექმენით სარეგისტრაციო ფორმა. რეგისტრაციის შემდეგ მომხმარებლის მონაცემი უნდა შეინახოთ სიაში ობიექტის სახით. თითოეულ მომხმარებელს უნდა ჰქონდეს თავისი ობიექტი. ამ ობიექტებს კარგი იქნება თუ შექმნით ობიექტის კონსტრუქტორი ფუნქციის მეშვეობით. გააკეთეთ შემოწმება, რომ მომხმარებელი უკვე დაკავებული ემაილით ვერ დარეგისტრირდეს. 

// სია მომხმარებელთა მონაცემებისთვის
// სია მომხმარებელთა მონაცემებისთვის
const users = [];

function User(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
}

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const fullname = document.getElementById("regFullname").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
        alert("ამ ელ.ფოსტით მომხმარებელი უკვე რეგისტრირებულია!");
        return;
    }

    const newUser = new User(fullname, email, password);
    users.push(newUser);

    const userList = document.getElementById("userList");
    const newItem = document.createElement("li");
    newItem.textContent = `სახელი: ${newUser.fullname} | ელ.ფოსტა: ${newUser.email}`;
    userList.appendChild(newItem);

    alert("რეგისტრაცია წარმატებით დასრულდა!");

    document.getElementById("registerForm").reset();
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;

    const user = users.find(user => user.email === loginEmail && user.password === loginPassword);

    if (user) {
        alert(`მოგესალმებით, ${user.fullname}!`);
    } else {
        alert("მონაცემები არასწორია! სცადეთ ხელახლა.");
    }

    document.getElementById("loginForm").reset();
});
