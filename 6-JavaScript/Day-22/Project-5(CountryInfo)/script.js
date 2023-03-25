let data;
const inputBox = document.getElementById("inputBox");
const countryFlag = document.getElementById("countryFlag");
const countryName = document.getElementById("countryName");
const officialName = document.getElementById("officialName");
const capitalName = document.getElementById("capitalName");
const currencyName = document.getElementById("currencyName");
const currencySymbol = document.getElementById("currencySymbol");
const region = document.getElementById("Region");
const population = document.getElementById("population");
const logoImage = document.getElementById("logoImage");

const getData = async (event) => {
    event.preventDefault();
    if(!inputBox.value){
        alert("Please Provide Country Name to get Country Stats.");
        return;
    }

    const country = inputBox.value;
    const fetchData = await fetch(`https://restcountries.com/v3.1/name/${country}`);

    const orgData = await fetchData.json();
    data = orgData[0];
    console.log(data);
    
    countryFlag.src = data.flags.png;
    countryName.innerHTML = data.name.common;
    officialName.innerHTML = data.name.official;
    capitalName.innerHTML = data.capital[0];
    population.innerHTML = data.population;
    currencySymbol.innerHTML = data.currencies.PKR.symbol;
    currencyName.innerHTML = data.currencies.PKR.name;
    region.innerHTML = data.region;
};

