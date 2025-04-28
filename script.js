const apiKey="b7b5bc1b2058361e8cc4f5fc9925a00f";
function getWeather() {
    const city= document.getElementById('cityInput').value;
    if(city ===""){
        alert("Please enter a city name");
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error("City not found");
        }
        return response.json();
    })
    .then(data => {
        showWeather(data);
    })
    .catch(error => {
        document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
    });
}
function showWeather (data) {
    const weatherDiv = document.getElementById('weatherResult');
    const cityName = data.name;
    const temp = data.main.temp;
    const description= data.weather[0].description;
    const icon = data.weather[0].icon;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    weatherDiv.innerHTML = `
    <h2>${cityName}</h2>
    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather icon">
    <p><strong>${temp}°C</strong></p>
    <p>${description}</p>
    <p>Humidity: ${humidity}%</p>
    <p>Wind Speed: ${windSpeed} m/s</p>
  `;
}