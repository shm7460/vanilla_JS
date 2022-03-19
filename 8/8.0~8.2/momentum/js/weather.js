const API_KEY = "d528e04941f2c0a6346e994bb29619b3";

// 경도위도를 불러오는 함수
function onGeoOk(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    console.log("You live it" ,lat ,log);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => { 
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp)}`;
    });
} 
function onGeoError(){
    alert("Can't find you. No weather forr you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

















