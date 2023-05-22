function fullTime() {
  let exactDate = new Date();
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayName = weekdays[exactDate.getDay()];

  let hours = exactDate.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = exactDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let timeAndDay = document.querySelector("#time");
  let currentTime = `${dayName}, at ${hours} : ${minutes}`;
  timeAndDay.innerHTML = currentTime;

  let dayPlusOne = document.querySelector("#day-plus-one");
  dayPlusOne.innerHTML = weekdays[exactDate.getDay() + 1];

  let dayPlusTwo = document.querySelector("#day-plus-two");
  dayPlusTwo.innerHTML = weekdays[exactDate.getDay() + 2];

  let dayPlusThree = document.querySelector("#day-plus-three");
  dayPlusThree.innerHTML = weekdays[exactDate.getDay() + 3];

  let dayPlusFour = document.querySelector("#day-plus-four");
  dayPlusFour.innerHTML = weekdays[exactDate.getDay() + 4];
}

function displayToday(response) {
  console.log(response.data);
  let city = document.querySelector("#city");
  city.innerHTML = response.data.city.name;

  let temperatureToday = document.querySelector("#temperature-today");
  temperatureToday.innerHTML = `${Math.round(
    response.data.list[0].main.temp
  )}ºC`;

  let feelsLike = document.querySelector("#feeling");
  feelsLike.innerHTML = `It feels like ${Math.round(
    response.data.list[0].main.feels_like
  )}ºC`;

  let highToday = document.querySelector("#high-today");
  highToday.innerHTML = `H:${Math.round(
    Math.max(
      response.data.list[0].main.temp_max,
      response.data.list[1].main.temp_max,
      response.data.list[2].main.temp_max,
      response.data.list[3].main.temp_max,
      response.data.list[4].main.temp_max,
      response.data.list[5].main.temp_max,
      response.data.list[6].main.temp_max,
      response.data.list[7].main.temp_max
    )
  )}ºC | `;

  let lowToday = document.querySelector("#low-today");
  lowToday.innerHTML = `L:${Math.round(
    Math.min(
      response.data.list[0].main.temp_min,
      response.data.list[1].main.temp_min,
      response.data.list[2].main.temp_min,
      response.data.list[3].main.temp_min,
      response.data.list[4].main.temp_min,
      response.data.list[5].main.temp_min,
      response.data.list[6].main.temp_min,
      response.data.list[7].main.temp_min
    )
  )}ºC`;

  let currentCondition = response.data.list[0].weather[0].description;
  let firstCharacter = currentCondition.charAt(0);
  firstCharacter = firstCharacter.toUpperCase();
  let capitalizedCurrentCondition = firstCharacter + currentCondition.slice(1);

  let conditionToday = document.querySelector("#condition-today");
  conditionToday.innerHTML = `${capitalizedCurrentCondition}`;

  let currentWind = response.data.list[0].wind.speed;
  let windSpeed = document.querySelector("#wind-speed");
  windSpeed.innerHTML = `Wind : ${currentWind} m/s.`;

  let currentHumidity = response.data.list[0].main.humidity;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity : ${currentHumidity} %.`;

  function forecast() {
    let tempPlusOne = document.querySelector("#day-plus-one-temp");
    tempPlusOne.innerHTML = `H:${Math.round(
      Math.max(
        response.data.list[8].main.temp_max,
        response.data.list[9].main.temp_max,
        response.data.list[10].main.temp_max,
        response.data.list[11].main.temp_max,
        response.data.list[12].main.temp_max,
        response.data.list[13].main.temp_max,
        response.data.list[14].main.temp_max,
        response.data.list[15].main.temp_max
      )
    )}ºC | L:${Math.round(
      Math.min(
        response.data.list[8].main.temp_min,
        response.data.list[9].main.temp_min,
        response.data.list[10].main.temp_min,
        response.data.list[11].main.temp_min,
        response.data.list[12].main.temp_min,
        response.data.list[13].main.temp_min,
        response.data.list[14].main.temp_min,
        response.data.list[15].main.temp_min
      )
    )}ºC`;

    let tempPlusTwo = document.querySelector("#day-plus-two-temp");
    tempPlusTwo.innerHTML = `H:${Math.round(
      Math.max(
        response.data.list[16].main.temp_max,
        response.data.list[17].main.temp_max,
        response.data.list[18].main.temp_max,
        response.data.list[19].main.temp_max,
        response.data.list[20].main.temp_max,
        response.data.list[21].main.temp_max,
        response.data.list[22].main.temp_max,
        response.data.list[23].main.temp_max
      )
    )}ºC | L:${Math.round(
      Math.min(
        response.data.list[16].main.temp_min,
        response.data.list[17].main.temp_min,
        response.data.list[18].main.temp_min,
        response.data.list[19].main.temp_min,
        response.data.list[20].main.temp_min,
        response.data.list[21].main.temp_min,
        response.data.list[22].main.temp_min,
        response.data.list[23].main.temp_min
      )
    )}ºC`;

    let tempPlusThree = document.querySelector("#day-plus-three-temp");
    tempPlusThree.innerHTML = `H:${Math.round(
      Math.max(
        response.data.list[24].main.temp_max,
        response.data.list[25].main.temp_max,
        response.data.list[26].main.temp_max,
        response.data.list[27].main.temp_max,
        response.data.list[28].main.temp_max,
        response.data.list[29].main.temp_max,
        response.data.list[30].main.temp_max,
        response.data.list[31].main.temp_max
      )
    )}ºC | L:${Math.round(
      Math.min(
        response.data.list[24].main.temp_min,
        response.data.list[25].main.temp_min,
        response.data.list[26].main.temp_min,
        response.data.list[27].main.temp_min,
        response.data.list[28].main.temp_min,
        response.data.list[29].main.temp_min,
        response.data.list[30].main.temp_min,
        response.data.list[31].main.temp_min
      )
    )}ºC`;

    let tempPlusFour = document.querySelector("#day-plus-four-temp");
    tempPlusFour.innerHTML = `H:${Math.round(
      Math.max(
        response.data.list[32].main.temp_max,
        response.data.list[33].main.temp_max,
        response.data.list[34].main.temp_max,
        response.data.list[35].main.temp_max,
        response.data.list[36].main.temp_max,
        response.data.list[37].main.temp_max,
        response.data.list[38].main.temp_max,
        response.data.list[39].main.temp_max
      )
    )}ºC | L:${Math.round(
      Math.min(
        response.data.list[32].main.temp_min,
        response.data.list[33].main.temp_min,
        response.data.list[34].main.temp_min,
        response.data.list[35].main.temp_min,
        response.data.list[36].main.temp_min,
        response.data.list[37].main.temp_min,
        response.data.list[38].main.temp_min,
        response.data.list[39].main.temp_min
      )
    )}ºC`;
  }
}

function cityWeatherSearch(event) {
  event.preventDefault();
  let cityName = document.querySelector("input").value;
  let apiKey = `bbd1db320ae920fe369bb8780e0dda6d`;
  let units = `metric`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(displayToday);
}

function yourLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = `eae061c95483dd066657bfc7525418ed`;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(displayToday);
}

function geolocation() {
  navigator.geolocation.getCurrentPosition(yourLocation);
}

fullTime();

let citySearch = document.querySelector("form");
citySearch.addEventListener("submit", cityWeatherSearch);

let button = document.querySelector("button");
button.addEventListener("click", geolocation);
