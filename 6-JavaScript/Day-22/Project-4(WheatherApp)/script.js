let data;
const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temprature = document.getElementById("temprature");
const weatherStatus = document.getElementById("weatherStatus");
const logoImage = document.getElementById("logoImage");

const getData = async (event) => {
    event.preventDefault();
    if(!inputBox.value){
        alert("Please Provide City Name to get Weather Stats.");
        return;
    }

    const city = inputBox.value;
    const fetchData = await fetch(`https://api.weatherapi.com/v1/current.json?key=86795efa08c74d2aaa524612232503&q=${city}`);

    const orgData = await fetchData.json();
    data = orgData;
    console.log(data);
    
    countryName.innerHTML = data.location.country;
    stateName.innerHTML = data.location.region;
    cityName.innerHTML = data.location.name;
    weatherStatus.innerHTML = data.current.condition.text;
    logoImage.setAttribute("src",  `${data.current.condition.icon}`);
    windSpeed.innerHTML = data.current.wind_mph;
    humidity.innerHTML = data.current.humidity;
    temprature.innerHTML = data.current.temp_c;
};

