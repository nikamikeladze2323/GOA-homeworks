/* 1) შექმენით სარეგიდტრაციო ფორმა და ცხრილი

ფორმის დადასტურებისას, შეყვანილი მონაცემები უნდა დაემატოს ცხრილში, ახალი რიგის სახით, კომენტარებით ახსენით თითოეული ნაბიჯი */

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    const table = document.getElementById("userTable");
    const newRow = table.insertRow();

    const nameCell = newRow.insertCell(0);
    const ageCell = newRow.insertCell(1);

    nameCell.textContent = name;
    ageCell.textContent = age;

    document.getElementById("registrationForm").reset(); 
});

// 2)წინა დავალებაში გამოიყენეთ object constructor

function Student(name, surname, scores) {
    this.name = name;
    this.surname = surname;
    this.scores = scores;

    this.getAverage = function () {
        return this.scores.reduce((sum, score) => sum + score, 0) / this.scores.length;
    };
}

const students = [
    new Student("Giorgi", "Abashidze", [95, 89, 92]),
    new Student("Nino", "Tsereteli", [85, 80, 88]),
    new Student("Luka", "Gogoladze", [90, 91, 94]),
    new Student("Ana", "Metreveli", [78, 83, 86]),
    new Student("Davit", "Tsiklauri", [98, 97, 99])
];

const topStudents = students.filter(student => student.getAverage() >= 90);

const studentNames = topStudents.map(student => student.name);

console.log(studentNames); 
