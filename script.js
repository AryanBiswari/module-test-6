// // var loct = document.getElementById('location').value;
// // var acces = document.getElementById('access').value;


// async function getWeather(){
//     var loct = document.getElementById('location').value;
// var acces = document.getElementById('access').value;
// var org_key = acces ? acces : "9e8ea5d7857898de0f51f478d0786f56";
//     const api_key = "http://api.weatherstack.com/current?access_key="+org_key+"&query="+loct;
//     const response = await fetch(api_key);
//     const data = await response.json();
//     const locations = data.location.country;
//     const latitude = data.location.lat;
//     const longitude = data.location.lon;
//     const TimeZone = data.location.timezone_id;
//     const windSpeed = data.current.wind_speed;
//     const pressure = data.current.pressure;
//     const humidity = data.current.humidity;
//     const windDirection = data.current.wind_dir;
//     const uv_index = data.current.uv_index;
//     const feelsLike = data.current.feelslike;

//     document.getElementById('loca').textContent = locations;
//     document.getElementById('lat').textContent = latitude;
//     document.getElementById('lon').textContent = longitude;
//     document.getElementById('tz').textContent = TimeZone;
//     document.getElementById('ws').textContent = windSpeed;
//     document.getElementById('pres').textContent = pressure;
//     document.getElementById('humi').textContent = humidity;
//     document.getElementById('wd').textContent = windDirection;
//     document.getElementById('uvi').textContent = uv_index;
//     document.getElementById('fl').textContent = feelsLike;
//     console.log(data);
// }
// // getWeather();



const form = document.getElementById('weather-form');
    
    // console.log(form);
    form.addEventListener('submit', (event) => {
      
      event.preventDefault();
      const accessKey = document.getElementById('access-key').value;
    //   console.log(accessKey);
      const location = document.getElementById('location').value;
    //   console.log(location);
      
      fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${accessKey}&contentType=json`)
        .then((response) => response.json()) 
        .then((data) => {
        //    console.log(data)
          if (data) {
           
            const apiResponse = `
              <h2>Weather in ${data.address}</h2>
              <p>Temperature: ${data.currentConditions.temp}</p>
              <p>Precipitation: ${data.currentConditions.precip}</p>
              <p>Wind Speed: ${data.currentConditions.windspeed}</p>
              <p>Latitude : ${data.latitude}</p>
              <p>Longitude : ${data.longitude}</p>
              <p>TimeZone : ${data.timezone}</p>
              <p>Humidity : ${data.currentConditions.humidity}</p>
              <p>Feels Like : ${data.currentConditions.feelslike}</p>
              <p>Pressure : ${data.currentConditions.pressure}</p>
              <p>UV Index : ${data.currentConditions.uvindex}</p>
              <p>Wind Direction : ${data.currentConditions.winddir}</p>
              
            `;
            document.getElementById('api-response').innerHTML = apiResponse;
          } else {
            
            document.getElementById('api-response').innerHTML = '<p>No result found</p>';
          }
        });
    });