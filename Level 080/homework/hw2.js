// 3) საიტზე დაამატეთ ერთი ფოტო. მასზე დაჭერის შედეგად უნდა იცვლებოდეს იგი მეორე ფოტოთი, ხოლო მეორე ფოტოზე მაუსის გადატარების შემთხვევაში ისიც უნდა ჩანაცვლდეს ამჯერად კიდევ განსხვავებული მესამე ფოტოთი. მესამე ფოტოზე კიდევ ერთხელ დაჭერა უნდა იწევევდეს თავდაპირველი ფოტოს დაბრუნებას;

const image = document.getElementById("dynamic-image");

image.addEventListener("click", function() {
    if (image.src.includes("image1.jpg")) {
        image.src = "image2.jpg"; 
    } else if (image.src.includes("image3.jpg")) {
        image.src = "image1.jpg"; 
    }
});

image.addEventListener("mouseover", function() {
    if (image.src.includes("image2.jpg")) {
        image.src = "image3.jpg"; 
    }
});

image.addEventListener("mouseout", function() {
    if (image.src.includes("image3.jpg")) {
        image.src = "image2.jpg"; 
    }
});
