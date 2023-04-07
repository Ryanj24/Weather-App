const container = document.querySelector('.container');
const currentCondition = document.getElementById('condition-text');
const currentWind = document.getElementById('current-wind');
const currentRain = document.getElementById('current-rain');
const currentHumidity = document.getElementById('current-humidity');
const currentTemp = document.getElementById('current-temperature');

const currentCity = document.getElementById('city');
const currentDateTime = document.getElementById('date-time');



/* 3 day forecast for glasgow
fetch('http://api.weatherapi.com/v1/forecast.json?key=0cf0102eee904623b4375635230504&q=glasgow&days=6&aqi=no&alerts=no', {mode: 'cors'})
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

/*
const getData = async () => {
    const response = await fetch(' http://api.weatherapi.com/v1/current.json?key=0cf0102eee904623b4375635230504&q=glasgow&days=3', {mode: 'cors'});

    const data = await response.json();
    return data
}

getData().then(resp => {
    //console.log(resp);
    currentCondition.textContent = resp.current.condition.text;
    currentWind.textContent = `${resp.current.gust_mph}mph`;
    currentRain.textContent = `${resp.current.precip_mm}mm`;
    currentHumidity.textContent = `${resp.current.humidity}%`;
    currentTemp.textContent = `${resp.current.temp_c}\xB0C`;

    currentCity.textContent = `${resp.location.name}, ${resp.location.country}`;
    currentDateTime.textContent = `${resp.location.localtime}`;
});

const forecast = async () => {
    const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=0cf0102eee904623b4375635230504&q=glasgow&days=1&aqi=no&alerts=no', {mode: 'cors'})

    const data = await response.json();
    return data
}

forecast().then(resp => {
    const hoursArr = resp.forecast.forecastday[0].hour;

    hoursArr.forEach(hr => {
        createHourlyTab(hr);
    })
    /* Get time for each hour 
    console.log(hoursArr.chance_of_rain);
})

*/

/* 5 day forecast
fetch('http://api.weatherapi.com/v1/forecast.json?key=0cf0102eee904623b4375635230504&q=glasgow&days=6&aqi=no&alerts=no', {mode: 'cors'})
.then(resp => {
    return resp.json();
})
.then(resp => {
    console.log(resp.forecast.forecastday[1]);
});*/





function createHourlyTab(obj) {

    const todaysWeatherDiv = document.querySelector('.todays-weather');

    const container = document.createElement('div');
    container.classList.add('hour-forecast');

    const hourDiv = document.createElement('div');
    hourDiv.classList.add('hour');
    const timeHeader = document.createElement('h1');
    timeHeader.textContent = `${obj.time.slice(11)}`;
    hourDiv.appendChild(timeHeader);
    container.appendChild(hourDiv);

    const condition = document.createElement('div');
    condition.classList.add('condition');
    const conditionText = document.createElement('p');
    conditionText.textContent = `${obj.condition.text}`;
    const conditionImg = document.createElement('img');
    conditionImg.src = `./assets${obj.condition.icon.slice(34)}`;
    condition.appendChild(conditionText);
    condition.appendChild(conditionImg);
    container.appendChild(condition);

    const tempRain = document.createElement('div');
    tempRain.classList.add('highs-lows');

    const temp = document.createElement('div');
    temp.classList.add('high-temp');
    const tempNum = document.createElement('p');
    tempNum.textContent = `Temperature: ${Math.round(obj.temp_c)}\xB0C`;
    temp.appendChild(tempNum);
    tempRain.appendChild(temp);

    const rainChance = document.createElement('div');
    rainChance.classList.add('rain-chance');
    const rain = document.createElement('p');
    rain.textContent = `Rain chance: ${obj.chance_of_rain}%`;
    rainChance.appendChild(rain);
    tempRain.appendChild(rainChance);
    container.appendChild(tempRain);

    todaysWeatherDiv.appendChild(container);
}


function dayForecast(obj) {
    const weekForecastDiv = document.querySelector('.week-forecast');

    // Create card for day
    const container = document.createElement('div');
    container.classList.add('weekday');


    // Day title
    const dayTitle = document.createElement('div');
    dayTitle.classList.add('day');
    //dayTitle.textContent = '';
    container.appendChild(dayTitle);

    // Conditions container
    const conditionsDiv = document.createElement('div');
    conditionsDiv.classList.add('conditions');

    const conditionsText = document.createElement('p');
    conditionsText.id = 'conditions-text';
    //conditionsText.textContent = '';
    conditionsDiv.appendChild(conditionsText);

    const conditionsImg = document.createElement('img');
    //conditionsImg.src = '';
    conditionsDiv.appendChild(conditionsImg);
    container.appendChild(conditionsDiv);


    // Details
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('details');

    const maxminDiv = document.createElement('div');
    maxminDiv.classList.add('maxmin-temp');
    detailsDiv.appendChild(maxminDiv);

    const tempHeader = document.createElement('p');
    tempHeader.textContent = 'Max/Min Temperature';
    maxminDiv.appendChild(tempHeader);


    const maxDiv = document.createElement('div');
    maxDiv.classList.add('max');

    const maxImg = document.createElement('img');
    maxImg.src = './assets/high-temp.png';
    maxDiv.appendChild(maxImg);

    const maxText = document.createElement('p');
    maxText.id = 'maxTemp-text';
    //maxText.textContent = '';
    maxDiv.appendChild(maxText);
    maxminDiv.appendChild(maxDiv);

    const minDiv = document.createElement('div');
    minDiv.classList.add('min');

    const minImg = document.createElement('img');
    minImg.src = './assets/low-temp.png';
    minDiv.appendChild(minImg);

    const minText = document.createElement('p');
    minText.id = 'minTemp-text';
    //minText.textContent = '';
    minDiv.appendChild(minText);
    maxminDiv.appendChild(minDiv);

    // Wind
    const windContainer = document.createElement('div');
    windContainer.classList.add('wind');
    detailsDiv.appendChild(windContainer);

    const windTitle = document.createElement('p');
    windTitle.textContent = 'Windspeed (mph)';
    windContainer.appendChild(windTitle);

    const windDiv = document.createElement('div');
    windDiv.classList.add('wind-div');
    windContainer.appendChild(windDiv);

    const windImg = document.createElement('img');
    windImg.src = './assets/wind.png';
    windContainer.appendChild(windImg);

    const windText = document.createElement('p');
    //windText.textContent = '';
    windContainer.appendChild(windText);


    // Rain
    const rainContainer = document.createElement('div');
    rainContainer.classList.add('rain');
    detailsDiv.appendChild(rainContainer);

    const rainTitle = document.createElement('p');
    rainTitle.textContent = 'Chance of Rain';
    rainContainer.appendChild(rainTitle);

    const rainDiv = document.createElement('div');
    rainDiv.classList.add('rain-div');
    rainContainer.appendChild(rainDiv);

    const rainImg = document.createElement('img');
    rainImg.src = './assets/rain.png';
    rainContainer.appendChild(rainImg);

    const rainText = document.createElement('p');
    //rainText.textContent = '';
    rainContainer.appendChild(rainText);

    container.appendChild(detailsDiv);
    weekForecastDiv.appendChild(container);

}

/*
<div class="weekday">
    <div class="details">
        <div class="rain">
            <p>Chance of Rain</p>
            <div class="rain-div">
                <img src="./assets/rainfall.png">
                <p>24%</p>
            </div>
        </div>
    </div>
</div>





*/









function clearFunction() {
    const todaysWeatherDiv = document.querySelector('.todays-weather');
    todaysWeatherDiv.innerHTML = '';
}