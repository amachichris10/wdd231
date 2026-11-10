const weatherIcon = document.querySelector("#weather-icon");
const currentTemp = document.querySelector("#current-temp");
const captionDesc = document.querySelector("figcaption");
const city = 'Lima';
const apiKey = '84dc31a6a96c01fbf4a27b19483795f8'
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
const forecast = document.querySelector('#forecast')

async function forecastApiFetch() {
    try {
        const response = await fetch(forecastUrl);
        const data = await response.json();
        processForecast(data.list)

        if (!response.ok) {
            throw new Error(response.text)
        }

    } catch (error) {
        console.log(error);
    }

};

async function apiFetch() {
    try {
        const response = await fetch(weatherUrl);
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
    weatherIcon.style.display = 'inline';
}

function displayForecast(data) {
    data.forEach(item => {
        const card = document.createElement('div')
        card.innerHTML = `
            <p>${item.temp}&deg;C</p>
            <p>${item.dateText}</p>
        `;
        forecast.appendChild(card);
    });
}

function processForecast(forecastList) {
    const dailyData = {};

    forecastList.forEach(item => {
        const date = item.dt_txt.split(' ')[0];

        const today = new Date().toISOString().split('T')[0];
        if (date === today) return;

        if (!dailyData[date]) {
            dailyData[date] = {
                temp: item.main.temp,
                weather: item.weather[0],
                dateText: date
            };
        };
    });

    const threeDayForecast = Object.values(dailyData).slice(0, 3);
    displayForecast(threeDayForecast)
}

apiFetch();
forecastApiFetch();