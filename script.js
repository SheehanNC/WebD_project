const apiKey = "97d095c6d8921e5b0dfc757d52941113";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function checkweather(city){
    var cityname = document.getElementById("cityname").value;
    const response = await fetch(apiUrl + `${cityname}&appid=${apiKey}`);
    const weatherIcon = document.querySelector(".weather-icon");
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp + "˚C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "% humidity";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/Sunny_cloud.png";
    }
    if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/sunny-3.png";
    }
    if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rainy.png";
    }
    if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/rainy.png";
    }
}

// checkweather();

// const apiKey = "97d095c6d8921e5b0dfc757d52941113";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";
// async function checkWeather(city){
//     const response = await fetch(apiUrl + `&appid=${apiKey}`);
//     var data = await response.json();
//     console.log(data);
//     document.querySelector(".city").innerHTML=data.name;
//     document.querySelector(".temp").innerHTML=data.main.temp;
//     document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
//     document.querySelector(".wind").innerHTML=data.wind.speed + " /km/h";
// }
// checkWeather();