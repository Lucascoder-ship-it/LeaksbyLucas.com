// Elemente referenzieren
const loginPage = document.getElementById('loginPage');
const registerPage = document.getElementById('registerPage');
const mainPage = document.getElementById('mainPage');
const trailerPage = document.getElementById('trailerPage');
const leaksPage = document.getElementById('leaksPage');
const newsPage = document.getElementById('newsPage');

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const newUsernameInput = document.getElementById('newUsername');
const newPasswordInput = document.getElementById('newPassword');

const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const backToLoginBtn = document.getElementById('backToLoginBtn');
const submitRegisterBtn = document.getElementById('submitRegisterBtn');

const trailerBtn = document.getElementById('trailerBtn');
const leaksBtn = document.getElementById('leaksBtn');
const newsBtn = document.getElementById('newsBtn');

const dragonballBtn = document.getElementById('dragonballBtn');
const onePieceBtn = document.getElementById('onePieceBtn');
const trailerVideo = document.getElementById('trailerVideo');
const videoSource = document.getElementById('videoSource');

const backBtn1 = document.getElementById('backBtn1');
const backBtn2 = document.getElementById('backBtn2');
const backBtn3 = document.getElementById('backBtn3');

const leaksText = document.getElementById('leaksText');
const newsText = document.getElementById('newsText');
const logoutBtn = document.getElementById('logoutBtn');
const logoutMessage = document.getElementById('logoutMessage');

// Funktion zum Anzeigen von Text mit Effekt
function displayText(element, text) {
    element.innerHTML = text;
    setTimeout(() => {
        element.style.opacity = 1;
    }, 100);
}

// Registrierung
submitRegisterBtn.addEventListener('click', () => {
    const username = newUsernameInput.value.trim();
    const password = newPasswordInput.value.trim();

    if (username && password) {
        let users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.length < 10 && !users.some(user => user.username === username)) {
            users.push({ username, password });
            localStorage.setItem('users', JSON.stringify(users));
            registerPage.style.display = 'none';
            loginPage.style.display = 'block';
        } else {
            alert('Maximale Anzahl an Benutzern erreicht oder Benutzername bereits vergeben.');
        }
    } else {
        alert('Bitte alle Felder ausfüllen.');
    }
});

// Login
loginBtn.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.some(user => user.username === username && user.password === password)) {
        loginPage.style.display = 'none';
        mainPage.style.display = 'block';
        logoutMessage.style.display = 'none';
    } else {
        alert('Ungültige Anmeldeinformationen.');
    }
});

// Zurück zum Login
backToLoginBtn.addEventListener('click', () => {
    registerPage.style.display = 'none';
    loginPage.style.display = 'block';
});

// Trailer Buttons
trailerBtn.addEventListener('click', () => {
    mainPage.style.display = 'none';
    trailerPage.style.display = 'block';
});

dragonballBtn.addEventListener('click', () => {
    videoSource.src = '2.mp4';
    trailerVideo.style.display = 'block';
    trailerVideo.load();
});

onePieceBtn.addEventListener('click', () => {
    videoSource.src = '1.mp4';
    trailerVideo.style.display = 'block';
    trailerVideo.load();
});

// Zurück Buttons
backBtn1.addEventListener('click', () => {
    trailerPage.style.display = 'none';
    mainPage.style.display = 'block';
    trailerVideo.style.display = 'none';
});

backBtn2.addEventListener('click', () => {
    leaksPage.style.display = 'none';
    mainPage.style.display = 'block';
    leaksText.style.opacity = 0;
});

backBtn3.addEventListener('click', () => {
    newsPage.style.display = 'none';
    mainPage.style.display = 'block';
    newsText.style.opacity = 0;
});

// Ausloggen
logoutBtn.addEventListener('click', () => {
    mainPage.style.display = 'none';
    loginPage.style.display = 'block';
    logoutMessage.style.display = 'block';
});

// Leaks Button
leaksBtn.addEventListener('click', () => {
    mainPage.style.display = 'none';
    leaksPage.style.display = 'block';
    displayText(leaksText, 'Hier ist ein Leaks-Text, der sich aufbaut.');
});

// Neuigkeiten Button
newsBtn.addEventListener('click', () => {
    mainPage.style.display = 'none';
    newsPage.style.display = 'block';
    displayText(newsText, 'Hier ist ein Neuigkeiten-Text, der sich aufbaut.');
});
