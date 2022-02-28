const cityName = document.getElementById("city_name");
const Temperature = document.getElementById("temperature");
const clouds = document.getElementById("clouds");
// const icon = document.getElementById('icon').src;

const searchWeather = () => {
  const cityName = document.getElementById("input-field");
  const city = cityName.value;
  cityName.value = "";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9a640d6191481e15e612c52f4cc41439&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayWeatherInformation(data));
};

const displayWeatherInformation = (weatherCondition) => {
    console.log(weatherCondition);
  const { name, main, weather } = weatherCondition;
  cityName.innerText = name;
  Temperature.innerText = main.temp;
  clouds.innerText = weather[0].main;
//   icon.innerText =  `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
  const icon = (document.getElementById(
    "icon"
  ).src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`);
};
