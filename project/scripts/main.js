const navButton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar')
import { apiFetch } from "./api.js";
import { displayCards } from "./cards.js";

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

apiFetch();
