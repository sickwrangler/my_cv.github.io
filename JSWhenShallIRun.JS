

window.addEventListener("load", () => {
  //instantiate variables needed.
  let hourArray = [];
  let tempArray = [];
  let long;
  let lat;
  let dateTime = new Date();
  let currentHour = dateTime.getHours();
  let hoursLeftInDay = 24 - currentHour;
  console.log(currentHour, hoursLeftInDay);
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimeZone = document.querySelector(".location-timezone");
  let bestTimeToGo = document.querySelector(".time-to-go");
  const apiKey = "b9e4b4b7dc24fb6e69ade13aa07cb9ad";

  //If Geo location is given, set long and lat vairables.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      //API Calls
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
      const apiForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,alerts&units=metric&appid=${apiKey}`;
      //API Call for current weather
      fetch(api)
        .then((response) => {
          //Get JSON response
          return response.json();
        })

        .then((data) => {
          //setting vairables from response
          let { temp } = data.main;
          let location = data.name;
          //Convert to C and 2 decimals
          temp = (temp - 273.15).toFixed(2);
          const { description, icon } = data.weather[0];
          //set DOM elements from the API
          temperatureDegree.textContent = temp;
          temperatureDescription.textContent = description;
          if (locationTimeZone) {
            locationTimeZone.textContent = location;
          }
          //Set icons depending on ID returned in API call
          let iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
          $("#wicon").attr("src", iconurl);
        });
      //API call for forecast
      fetch(apiForecast)
        .then((response) => {
          return response.json();
        })
        .then((dataForecast) => {
          console.log(dataForecast);

          let day = [];

          //Loop through each hour for 24 hours. Look to improve by setting it based upon how many hours left in the day.
          for (var i = 0; i < hoursLeftInDay; i++) {
            let { dt, feels_like, pop, wind_speed, clouds, temp } =
              dataForecast.hourly[i];
            let { sunrise, sunset } = dataForecast.daily[0];

            let sun = 0;

            //Add 10 to score if the sun is up.
            if (dt >= sunrise && dt <= sunset) {
              sun = 10;
            }
            // Current way of calculating score
            let score = sun + feels_like - pop - wind_speed - clouds;
            //Push the score and hour into a new array.
            day.push({ score: score, hour: dt });
            //Push temperature into array for chart use
            tempArray.push(temp);
            //Push hour into array for Chart use
            hourArray.push(currentHour + i );
          }
          //Find the max score
          let bestScore = Math.max.apply(
            Math,
            day.map(function (o) {
              return o.score;
            })
          );
          //Return time with the max score
          let bestHour = day.find(function (p) {
            return p.score == bestScore;
          });
          //Convert from unix into readable time
          let milliSeconds = bestHour.hour * 1000;
          const bestHourDateTime = new Date(milliSeconds);
          const humanBestDate = bestHourDateTime.toLocaleTimeString();
          bestTimeToGo.textContent = humanBestDate;

//CHART TIME
var ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
    
    type: 'line',
    data: {
        labels: hourArray,
        datasets: [{
            label: 'Temperature C',
            data: tempArray,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

          
        });
    });
    //Error handling if no geolocation is given
  } else {
    h1.textContent = "not working because Geolocation is disabled";
  }

  
});



