let word = "სალამი"; 
let language = prompt("შეიყვანეთ სასურველი ენა (ქართული, ინგლისური, ფრანგული):");

switch (language.toLowerCase()) {
    case "ქართული":
        console.log(`"${word}" ქართულად უკვე ასე ჟღერს!`);
        break;
    case "ინგლისური":
        console.log(`"${word}" ინგლისურად: "Hello"`);
        break;
    case "ფრანგული":
        console.log(`"${word}" ფრანგულად: "Bonjour"`);
        break;
    default:
        console.log("ასეთი ენა არ არსებობს. სცადეთ ხელახლა!");
        language = prompt("გთხოვთ, ხელახლა შეიყვანოთ ენა (ქართული, ინგლისური, ფრანგული):");
}
