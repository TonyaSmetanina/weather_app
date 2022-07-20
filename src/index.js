
function showCity (event) {
  event.preventDefault ();

  let name = document.querySelector ("#name-city");
  let cityInput = document.querySelector ("#city-input");
  name.innerHTML = cityInput.value; 


}

let searchCity = document.querySelector ("#search-city");
searchCity.addEventListener ("submit", showCity);

//Day of week

let today = new Date ();


let days = [
  "Sunday",
  "Monday", 
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday" 
];

let dayweek = document.querySelector ("#dayInfo");
let dayIndex = today.getDay ();
dayweek.innerHTML = `${days[dayIndex]}`;

let month = [
  "January", 
  "February", 
  "March", 
  "April", 
  "May", 
  "June", 
  "July", 
  "August", 
  "September", 
  "October", 
  "November", 
  "December"
]

let monthYear = document.querySelector ("#month");
monthYear.innerHTML = `${month[today.getMonth()]}`;

let numberDay = document.querySelector ("#number-day");
numberDay.innerHTML = `${today.getDate()}`;


let dayweeksecond = document.querySelector ("#dayInfoSecond");
dayweeksecond.innerHTML = `${days[dayIndex-1]}`;

let numberDaySecond = document.querySelector ("#number-day-second");
numberDaySecond.innerHTML = `${today.getDate()+ 1 }`;

let monthYearSec = document.querySelector ("#monthSec");
monthYearSec.innerHTML = `${month[today.getMonth()]}`;



let dayweekTh = document.querySelector ("#dayInfoThird");
dayweekTh.innerHTML = `${days[dayIndex - 2]}`;

let numberDayTh = document.querySelector ("#number-day-third");
numberDayTh.innerHTML = `${today.getDate()+ 2 }`;

let monthYearTh = document.querySelector ("#monthThird");
monthYearTh.innerHTML = `${month[today.getMonth()]}`;



let dayweekFour = document.querySelector ("#dayInfoFour");
dayweekFour.innerHTML = `${days[dayIndex - 3]}`;

let numberDayFour = document.querySelector ("#number-day-four");
numberDayFour.innerHTML = `${today.getDate()+ 3 }`;

let monthYearFour = document.querySelector ("#monthFour");
monthYearFour.innerHTML = `${month[today.getMonth()]}`;


let dayweekFive = document.querySelector ("#dayInfoFive");
dayweekFive.innerHTML = `${days[dayIndex - 4]}`;

let numberDayFive = document.querySelector ("#number-day-five");
numberDayFive.innerHTML = `${today.getDate()+ 4 }`;

let monthYearFive = document.querySelector ("#monthFive");
monthYearFive.innerHTML = `${month[today.getMonth()]}`;


let dayweekSix = document.querySelector ("#dayInfoSix");
dayweekSix.innerHTML = `${days[dayIndex - 5]}`;

let numberDaySix = document.querySelector ("#number-day-six");
numberDaySix.innerHTML = `${today.getDate()+ 5 }`;

let monthYearSix = document.querySelector ("#monthSix");
monthYearSix.innerHTML = `${month[today.getMonth()]}`;


let dayweekSev = document.querySelector ("#dayInfoSev");
dayweekSev.innerHTML = `${days[dayIndex - 6 ]}`;

let numberDaySev = document.querySelector ("#number-day-sev");
numberDaySev.innerHTML = `${today.getDate()+ 6 }`;

let monthYearSev = document.querySelector ("#monthSev");
monthYearSev.innerHTML = `${month[today.getMonth()]}`;


////

function formatDate (date) {

  let hours = date.getHours ();
  
  if (hours < 10) {
    hours = `0${hours}`;
  }
  
  let minutes = date.getMinutes ();
  if (minutes <10 ) {
    minutes = `0${minutes}`; 
  }
  
  let dayOne = date.getDay ();
  let daysweek = [
    "Sunday", 
    "Monday", 
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let dayArray = daysweek[dayOne];

  return `${dayArray} ${hours}:${minutes}`;
}

let dateElement = document.querySelector ("#date");
let currentTime = new Date (); 

dateElement.innerHTML = formatDate (currentTime);

/////

function convertToFareng(event) {
  event.preventDefault ();
  let temperatureElement = document.querySelector ("#today-temp");
  let temperature = temperatureElement.innerHTML;
  temperature = Number (temperature); 
  temperatureFareng = Math.round (temperature *1.8 + 32);
  temperatureElement.innerHTML = temperatureFareng;


}


let farengLink = document.querySelector ("#far-link");
farengLink.addEventListener ("click", convertToFareng);

function convertToCelc (event) {
  event.preventDefault ();
  let temperatureElementCel = document.querySelector ("#today-temp");
  let temperatureCel = temperatureElementCel.innerHTML;
  temperatureCel = Number (temperatureCel);
  temperatureElementCel.innerHTML = Math.round (0.56*(temperatureCel - 32));

}

let celcLink = document.querySelector ("#celc-link");
celcLink.addEventListener ("click", convertToCelc);

/////

function showTemperature(response) {

  let city = document.querySelector("#name-city");
  city.innerHTML = response.data.name;
  
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#today-temp");
  temperatureElement.innerHTML = `${temperature}`;
  
  let mintemp = Math.round(response.data.main.temp_min);
  let minTempElement = document.querySelector (".span-tempr-min");
  minTempElement.innerHTML = `${mintemp}°`;
 
  let maxTemp = Math.round(response.data.main.temp_max);
  let maxTempElement = document.querySelector (".span-tempr");
  maxTempElement.innerHTML = `${maxTemp}°`;

  let humidity = document.querySelector ("#humidity");
  humidity.innerHTML = `${response.data.main.humidity}`; 

  let description = document.querySelector ("#weather-decription");
  description.innerHTML = `${response.data.weather[0].main}`;


}

function search (city) {
  let apiKey = "2385e38ab7a755a47b225394ab5f5fc0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);

}


function handleSubmit(event) {
  event.preventDefault();

  let city = document.querySelector("#city-input").value;
  search (city);
}

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function searchLocation (position) {
  let apiKey = "2385e38ab7a755a47b225394ab5f5fc0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  console.log (apiUrl);
  axios.get(apiUrl).then(showTemperature);

}

function getCurrentLocation (event) {
  event.preventDefault ();
  navigator.geolocation.getCurrentPosition (searchLocation);

}

let currentLocationButton = document.querySelector ("#location");
currentLocationButton.addEventListener ("click", getCurrentLocation);

search (`Kyiv`);


///Daily weather

// function showDailyTemperature (response) {
//   console.log (response);
//   let dailyDescription = document.querySelector ("#min-temp-day-second");
//   dailyDescription.innerHTML = `${response.data.list[0].main.temp_min}`;


// }

// function dailyWeather () {
//   let apiKey = "2385e38ab7a755a47b225394ab5f5fc0";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=${apiKey}`;

//   console.log (apiUrl);
//   axios.get(apiUrl).then(showDailyTemperature);

// }

// dailyWeather ();
