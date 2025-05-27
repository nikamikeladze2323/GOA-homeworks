// 1)შექმენით სია სადაც მოცემული გექნებათ რენდომ სახელები რომებიც იქნება არასწორად დაწერილი(სახელის პირველი ასო პატარა) და ასევე გექნებათ სწორად დაწერილიც(სახელის პირველი ასო დიდი ასოთი) თქვენი მიზანია დაწეროთ ფუნქცია რომელიც გაფილტრავს ამ სიას და დააბრუნებს ახალ სიას სადაც მხოლოდ სწორად დაწერილი სახელები იქნება <3

const names = ["giorgi", "Nino", "luka", "Ana", "davit", "Mariam"];

const filterCorrectNames = arr => arr.filter(name => name.charAt(0) === name.charAt(0).toUpperCase());

console.log(filterCorrectNames(names));
