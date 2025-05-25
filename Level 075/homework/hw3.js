// 4)შექმენი ობიექტი სახელად student რომელსაც ექნება fullName , scores(scores-უნდა იყოს სია რადგან შეინახოთ რამდენიმე მნიშვნელობა) , ასევე ექნება ორი ფუნქცია 1)averageScore()- რომელიც გამოითცლის საშუალო ქულას , 2)checkStudent() - რომელიც გამოითლის მოსწავლის დონეს ქულების მიხედვით , თუ საშუალო ქულა იქნება 90-ზე მეტი გამოსახეთ კონსოლში შემდეგი ტექსტი ("საუკეთესო სტუდენტი")  , თუ საშუალო ქულა იქნება 90 ზე დაბალი და 60 ზე მაღალი გამოსახეთ "კარგი მოსწავლე" , ხოლო თუ საშუალო ქულა იქნება 60 ზე დაბალი გამოსახეთ "ნორმალური მოსწალე" //

function averageScore() {
    const student = {
        fullname: "Giorgi",
        score: [20, 15, 50, 60, 30]
    };

    let checkStudent = 0;

    for (i = 0; i < student.score.length; i++) {
        checkStudent += student.score[i];
    }

    const average = checkStudent / student.score.length;
    

    if (average >= 90) {
        console.log(`საუკეთესო სტუდენტი: ${average}`);
    }
    else if (average > 60) {
        console.log(`კარგი მოსწავლე: ${average}`);
    }
    else if (average < 60) {
        console.log(`ნორმალური მოსწავლე: ${average}`);
    }
}

averageScore();
