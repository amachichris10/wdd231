import { activities } from "../data/activities.mjs";
const cardContainer = document.querySelector('#activities');
const lastVisitString = localStorage.getItem('last-visit');

function displayCards(list) {
    list.forEach(item => {
        const card = document.createElement('section');
        card.classList.add('information-card');
        card.innerHTML = `
        <h2>${item.name}</h2>
        <img src="images/${item.image_url}" alt="${item.name}" width="300" height="200">
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button class='main-button'>Learn more</button>
        `;
        cardContainer.appendChild(card);
    });
}

const lastVisit = new Date(lastVisitString);
const oneDayInMs = 24 * 60 * 60 * 1000;
const now = new Date();
const differenceInMs = now - lastVisit
const visitMessage = document.querySelector('#visit-message')

if (!lastVisitString) {
    visitMessage.innerHTML = 'Welcome! Thank you for visiting for the first time!';
}
else {
    if (differenceInMs > oneDayInMs) {
        const daysPassed = Math.floor(differenceInMs / oneDayInMs)
        visitMessage.innerHTML = `You last visited ${daysPassed} ${daysPassed > 1 ? 'days' : 'day'} ago.`;
    }
    else {
        visitMessage.innerHTML = 'Back so soon! Awesome!';
    }
}

displayCards(activities);
localStorage.setItem("last-visit", new Date().toISOString())