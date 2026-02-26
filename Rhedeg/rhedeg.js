window.onload = function () {
  let btn = document.getElementById("paces");
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    gatherData();
    window.location = "./Paces/paces.html";
  });
};

function gatherData() {
  // variables
  let race = "";
  let age = 0;
  let goal = 0;

  // What distance are you training for data.
  const raceRadios = document.getElementsByName("raceDistance");

  for (var i = 0, length = raceRadios.length; i < length; i++) {
    if (raceRadios[i].checked) {
      race = raceRadios[i].value;
      localStorage.setItem("race", race);
      break;
    }
  }

  // What is your age data
  const ageField = document.getElementById("age").value;
  if (ageField) {
    age = Number(ageField);
    localStorage.setItem("age", age);
  }

  // What is your goal time
  const goalField = document.getElementById("goalTime").value;
  if (goalField) {
    goal = timeToSeconds(goalField);
    localStorage.setItem("goal", goal);
  }
}

function timeToSeconds(timestr) {
  const a = timestr.split(":");

  // Supports both HH:MM and HH:MM:SS from <input type="time">.
  const hours = Number(a[0] || 0);
  const mins = Number(a[1] || 0);
  const secs = Number(a[2] || 0);

  return hours * 60 * 60 + mins * 60 + secs;
}
