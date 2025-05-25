// 4) შექმენით სარეგისტრაციო ვებ-საიტი, რომელიც დიზაინის მხრივ მაქსიმალურად დახვეწავთ. მომხმარებელს Input ველებში შემოატანინეთ Email, Password და კიდევ ერთხელ გაამეორებინეთ Password, აუცილებლად დაამატეთ Submit ღილაკიც. გაიხსენეთ ფუნქცია, რომელიც გაკვეთილზე გავაკეთეთ და თქვენით დაამატეთ მსგავსი ფუნქციონალი თქვენს სარეგისტრაციო საიტზე. იმ შემთხვევაში თუ შეყვანილი პაროლი და გამეორებული პაროლი არ ემთხვევა ერთმანეთს alert box-ში გამოიტანეთ "Passwords do not match eachother. Try again.", თუ ორივე პაროლის შესაყვანი ველი ცარიელი იქნება გამოიტანეთ "Input fields cannot be empty.", ხოლო იმ შემთხვევაში თუ  შეყვანილი პაროლი და გამეორებული პაროლი ემთხვევა ერთმანეთს alert box-ში "Your login was successful" გამოიტანეთ;

function validateForm() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    if (password === "" || confirmPassword === "") {
        alert("Input fields cannot be empty.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match eachother. Try again.");
        return;
    }

    alert("Your login was successful");
}
