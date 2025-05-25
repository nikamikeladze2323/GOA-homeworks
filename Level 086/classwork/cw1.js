let month = prompt("შეიყვანეთ თვე (მაგ: იანვარი, თებერვალი)").toLowerCase();

switch (month) {
    case "დეკემბერი":
    case "იანვარი":
    case "თებერვალი":
        console.log("❄️ ზამთარი");
        break;
    case "მარტი":
    case "აპრილი":
    case "მაისი":
        console.log("🌸 გაზაფხული");
        break;
    case "ივნისი":
    case "ივლისი":
    case "აგვისტო":
        console.log("☀️ ზაფხული");
        break;
    case "სექტემბერი":
    case "ოქტომბერი":
    case "ნოემბერი":
        console.log("🍂 შემოდგომა");
        break;
    default:
        console.log("ასეთი თვე არ არსებობს. სცადეთ ხელახლა!");
}
