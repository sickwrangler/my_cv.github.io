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
      console.log(long);
      console.log(lat);

      const proxy = "https://cors-anywhere.herokuapp.com/corsdemo";
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          //- 273.15
          const { temp } = data.main;
          const { description } = data.weather[0];
          //set DOM elements from the API
          temperatureDegree.textContent = temp;
          temperatureDescription.textContent = description;
          locationTimeZone.textContent = data.name;
        });
    });
  } else {
    h1.textContent = "not working because Geolocation is disabled";
  }

  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
});

/*http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={b9e4b4b7dc24fb6e69ade13aa07cb9ad}*/
