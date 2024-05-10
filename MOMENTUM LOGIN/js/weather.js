
const APIKEY = "cd80ec5a60822de9c96ffb318597e7e4";

function onGeoOk(position){
    const lat = "37.5985";
    const lon = "126.9783";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;
    fetch(url) 
        .then(response => response.json())  //json : 네트워크에 url로 표시된 전부?
        .then(data => {   
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `날씨 : ${data.weather[0].main}, 지역 :` ;
    }); 
}
function onGeoError(){
    alert("can't find you.");
}
navigator.geolocation.getCurrentPosition(onGeoError, onGeoOk);  // 안되서 순서 바꿈