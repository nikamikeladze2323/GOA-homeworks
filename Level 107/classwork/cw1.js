

const list1 = [1, 2, 3, 4, 5];
const list2 = ["a", "b", "c", "d", "e"];
const list3 = [true, false, null, undefined, NaN];

const combinedList = [...list1, ...list2, ...list3, "extra1", 99, { name: "Nikolozi" }, ["array"], Symbol("unique")];

console.log(combinedList);
