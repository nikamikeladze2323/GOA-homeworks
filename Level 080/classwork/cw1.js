// 2) დაამატეთ საიტზე ფოტო, რომელზე მაუსის გადატარებისას, უნდა შეიცვალოს ეს ფოტო. მაუსის გაწევისას კი დაუბრუნდეს ისევ საწყის ფოტოს.

const image = document.getElementById('img');

image.addEventListener('mouseover', () => {
    image.src = 'https://th.bing.com/th/id/OIP.NSbRjD8f7N7E1g-ZfO5aJAHaE5?w=373&h=202&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3'; 
});

image.addEventListener('mouseout', () => {
    image.src = 'https://th.bing.com/th/id/OIP.XJ2X9e6rZlH7wuX31lJebAHaE8?w=259&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3'; 
});
