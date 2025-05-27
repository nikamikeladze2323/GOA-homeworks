// 3)შექმენით სია სადაც გექნებათ ობიექტები , ამ ობიექტებში უნდა გქონდეთ სტუდენტის სახელი,გვარი და ქულები, ქულები უნდა იყოს სია , თქვენი დავალებაა გამოთვალოთ ქულების საშუალო შემდეგ გაფილტროთ მთავარი სია, ვისი საშუალო ქულაც იქნება მეტი ან ტოლი 90-ზე ისინი გადაიტანეთ გაფილტრულ სიაში , შემდეგ map()-ის საშუალებით გადაუარეთ გაფილტრულ სიას და დააბრუნეთ ახალ სიაში მხოლოდ სტუდენტის სახელები

const students = [
    { name: "Giorgi", surname: "Abashidze", scores: [95, 89, 92] },
    { name: "Nino", surname: "Tsereteli", scores: [85, 80, 88] },
    { name: "Luka", surname: "Gogoladze", scores: [90, 91, 94] },
    { name: "Ana", surname: "Metreveli", scores: [78, 83, 86] },
    { name: "Davit", surname: "Tsiklauri", scores: [98, 97, 99] }
];

const calculateAverage = scores => scores.reduce((sum, score) => sum + score, 0) / scores.length;

const topStudents = students.filter(student => calculateAverage(student.scores) >= 90);

const studentNames = topStudents.map(student => student.name);

console.log(studentNames); 
