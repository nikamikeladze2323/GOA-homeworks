
const currentUser = localStorage.getItem('loggedInUser');
if (!currentUser) window.location.href = "index.html";

document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    window.location.href = "index.html";
});

