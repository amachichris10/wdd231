const weatherIcon = document.querySelector("#weather-icon");
const currentTemp = document.querySelector("#current-temp");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.7&lon=6.6&units=metric&appid=84dc31a6a96c01fbf4a27b19483795f8";

async function apiFetch() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayResults(data);

        if (!response.ok) {
            throw new Error(response.text)
        }

    } catch (error) {
        console.log(error);
    }
    
};

function displayResults(data) {
    weatherIcon.innerHTML = "";
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const desc = data.weather[0].description;
    captionDesc.textContent = desc;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
}

apiFetch();