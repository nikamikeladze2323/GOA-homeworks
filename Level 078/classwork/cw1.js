// 2)createElement-ის გამოყენებით შექმენით ერთი მშობელი div-ელემენტი, ეს div-ი ჩაამატეთ body-ში , შემდეგ ამ მშობელ div-ში ჩაამატეთ კიდევ ორი შვილი div-ი და განალაგეთ ვერტიკალურად ერთმანეთისგან თანაბარი დაშორებით ,  პირველი დივი იყოს წითელი მეორე იყოს მწვანე , ასევე დაუმატეთ სასურველი სტილები

const parentDiv = document.createElement('div');
parentDiv.style.display = 'flex';
parentDiv.style.flexDirection = 'column';
parentDiv.style.alignItems = 'center';
parentDiv.style.gap = '20px'; 
parentDiv.style.padding = '20px';
parentDiv.style.backgroundColor = 'lightgray';
parentDiv.style.width = '200px';
parentDiv.style.margin = 'auto';

const redChild = document.createElement('div');
redChild.style.width = '100px';
redChild.style.height = '100px';
redChild.style.backgroundColor = 'red';

const greenChild = document.createElement('div');
greenChild.style.width = '100px';
greenChild.style.height = '100px';
greenChild.style.backgroundColor = 'green';

parentDiv.appendChild(redChild);
parentDiv.appendChild(greenChild);

document.body.appendChild(parentDiv);
