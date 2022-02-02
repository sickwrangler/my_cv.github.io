window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimeZone = document.querySelector(".location-timezone");
  const apiKey = "b9e4b4b7dc24fb6e69ade13aa07cb9ad";

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let { temp } = data.main;
          let location = data.name;
          temp = (temp - 273.15).toFixed(2);
          const { description, icon } = data.weather[0];
          //set DOM elements from the API
          temperatureDegree.textContent = temp;
          temperatureDescription.textContent = description;
          if (locationTimeZone) {
            locationTimeZone.textContent = location;
          }
          let iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
          $("#wicon").attr("src", iconurl);
        });
    });
  } else {
    h1.textContent = "not working because Geolocation is disabled";
  }
});

/*http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={b9e4b4b7dc24fb6e69ade13aa07cb9ad}*/
