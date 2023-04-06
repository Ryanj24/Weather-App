const container = document.querySelector('.container');

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