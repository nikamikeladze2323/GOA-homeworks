 const obj = {
  arr: [
    // item1
    {
      level: [10, 50, 100],
    },

    // item2
    {
      level: [20, 40, 60],
      students: [
        {
          name: "jemala",
          surname: "barkalaia",
          score: [8, 8, 10],
        },
        {
          name: "jumbera",
          surname: "lamazi",
          score: [10, 7, 9],
        },
      ],
    },

  ],
};

const {
  arr: [
    { level: [firstLevel1, firstLevel2, firstLevel3] },
    {
      level: [secondLevel1, secondLevel2, secondLevel3],
      students: [
        { name: student1Name, surname: student1Surname, score: [student1Score1, student1Score2, student1Score3] },
        { name: student2Name, surname: student2Surname, score: [student2Score1, student2Score2, student2Score3] },
      ],
    },
  ],
} = obj;

console.log(firstLevel1, firstLevel2, firstLevel3); // 10 50 100
console.log(secondLevel1, secondLevel2, secondLevel3); // 20 40 60
console.log(student1Name, student1Surname, student1Score1, student1Score2, student1Score3); // jemala barkalaia 8 8 10
console.log(student2Name, student2Surname, student2Score1, student2Score2, student2Score3); // jumbera lamazi 10 7 9
