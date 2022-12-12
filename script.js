// var loct = document.getElementById('location').value;
// var acces = document.getElementById('access').value;


async function getWeather(){
    var loct = document.getElementById('location').value;
var acces = document.getElementById('access').value;
var org_key = acces ? acces : "9e8ea5d7857898de0f51f478d0786f56";
    const api_key = "http://api.weatherstack.com/current?access_key="+org_key+"&query="+loct;
    const response = await fetch(api_key);
    const data = await response.json();
    const locations = data.location.country;
    const latitude = data.location.lat;
    const longitude = data.location.lon;
    const TimeZone = data.location.timezone_id;
    const windSpeed = data.current.wind_speed;
    const pressure = data.current.pressure;
    const humidity = data.current.humidity;
    const windDirection = data.current.wind_dir;
    const uv_index = data.current.uv_index;
    const feelsLike = data.current.feelslike;

    document.getElementById('loca').textContent = locations;
    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude;
    document.getElementById('tz').textContent = TimeZone;
    document.getElementById('ws').textContent = windSpeed;
    document.getElementById('pres').textContent = pressure;
    document.getElementById('humi').textContent = humidity;
    document.getElementById('wd').textContent = windDirection;
    document.getElementById('uvi').textContent = uv_index;
    document.getElementById('fl').textContent = feelsLike;
    console.log(data);
}
// getWeather();
