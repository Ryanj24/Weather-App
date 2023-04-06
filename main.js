const container = document.querySelector('.container');
const currentCondition = document.getElementById('condition-text');
const currentWind = document.getElementById('current-wind');
const currentRain = document.getElementById('current-rain');
const currentHumidity = document.getElementById('current-humidity');
const currentTemp = document.getElementById('current-temperature');

const currentCity = document.getElementById('city');
const currentDateTime = document.getElementById('date-time');


/* 3 day forecast for glasgow
fetch(' http://api.weatherapi.com/v1/current.json?key=0cf0102eee904623b4375635230504&q=glasgow&days=3', {mode: 'cors'})
.then(resp => {
    return resp.json();
})
.then(resp => {
    console.log(resp);
});*/

/* forecast each hour of 24hr period
fetch('http://api.weatherapi.com/v1/forecast.json?key=0cf0102eee904623b4375635230504&q=glasgow&days=1&aqi=no&alerts=no', {mode: 'cors'})
.then(resp => {
    return resp.json();
})
.then(resp => {
    console.log(resp.forecast.forecastday[0].hour);
});*/


const getData = async () => {
    const response = await fetch(' http://api.weatherapi.com/v1/current.json?key=0cf0102eee904623b4375635230504&q=glasgow&days=3', {mode: 'cors'});

    const data = await response.json();
    return data
}

getData().then(resp => {
    console.log(resp);
    currentCondition.textContent = resp.current.condition.text;
    currentWind.textContent = `${resp.current.gust_mph}mph`;
    currentRain.textContent = `${resp.current.precip_mm}mm`;
    currentHumidity.textContent = `${resp.current.humidity}%`;
    currentTemp.textContent = `${resp.current.temp_c}\xB0C`;

    currentCity.textContent = `${resp.location.name}, ${resp.location.country}`;
    currentDateTime.textContent = `${resp.location.localtime}`;
});