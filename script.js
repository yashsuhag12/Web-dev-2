let apiKey = "PASTE_YOUR_API_KEY";

async function getWeather(){

try{

let city =
document.getElementById("city").value;

let response = await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
);

let data = await response.json();


if(data.cod != 200){

alert("City not found");

return;

}


document.getElementById("cityName").innerText = data.name;

document.getElementById("temp").innerText =
data.main.temp + " °C";

document.getElementById("weather").innerText =
data.weather[0].main;

document.getElementById("humidity").innerText =
data.main.humidity + "%";

document.getElementById("wind").innerText =
data.wind.speed;


}
catch{

alert("Error");

}

}