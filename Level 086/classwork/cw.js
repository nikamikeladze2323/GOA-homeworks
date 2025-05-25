let month = parseInt(prompt("შეიყვანეთ თვე (1-12):"));

switch (month) {
    case 1:
        console.log("იანვარი");
        break;
    case 2:
        console.log("თებერვალი");
        break;
    case 3:
        console.log("მარტი");
        break;
    case 4:
        console.log("აპრილი");
        break;
    case 5:
        console.log("მაისი");
        break;
    case 6:
        console.log("ივნისი");
        break;
    case 7:
        console.log("ივლისი");
        break;
    case 8:
        console.log("აგვისტო");
        break;
    case 9:
        console.log("სექტემბერი");
        break;
    case 10:
        console.log("ოქტომბერი");
        break;
    case 11:
        console.log("ნოემბერი");
        break;
    case 12:
        console.log("დეკემბერი");
        break;
    default:
        console.log("ასეთი თვე არ არსებობს. სცადეთ ხელახლა!");
}
