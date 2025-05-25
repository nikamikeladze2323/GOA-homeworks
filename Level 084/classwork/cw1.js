// 2)შექმენით 4 div-კონტეინერი,თითოეულ დივს მიეცით id , თუ რა ფერი უნდა გახდეს ეს დივი დაკლიკების შემდეგ,ასევე ამ დივში უნდა იყოს პარაგრაფი(Click to see color), შემდეგ javaascript-იდან შეამოწმეთ რომელ DIV-ზე განხორციელდა მოვლენა , ასევე შეამოწმეთ ამ DIV- ის ID-ები და მიანიჭეთ შესაბამისი ფერი ,  ასევე შეცვალეთ paragraph-ის textContent იმ ფერის სახელით რა ფერითაც შეიცვლება დივ

document.querySelectorAll('.container').forEach(div => {
    div.addEventListener('click', function(event) {
        let clickedDiv = event.target.closest('.container'); 
        if (!clickedDiv) return;

        let color = clickedDiv.id; 
        clickedDiv.style.backgroundColor = color; 
        clickedDiv.querySelector('p').textContent = color.charAt(0).toUpperCase() + color.slice(1); 
    });
});
