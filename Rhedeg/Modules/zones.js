//load in data from first page. 
window.onload=function(){
const age = localStorage.getItem("age");
//Max heart rate 
const maxHeartrate = (age,zone) => Math.round((211 - 0.64 * age) * zone);
console.log(maxHeartrate(age,0.5));
//Update HTML
document.getElementById("zone1heart").setHTML(maxHeartrate(age,0.5) + " - " + (maxHeartrate(age,0.6)));
document.getElementById("zone2heart").setHTML(maxHeartrate(age,0.6) + " - " + (maxHeartrate(age,0.7)));
document.getElementById("zone3heart").setHTML(maxHeartrate(age,0.7) + " - " + (maxHeartrate(age,0.8)));
document.getElementById("zone4heart").setHTML(maxHeartrate(age,0.8) + " - " + (maxHeartrate(age,0.9)));
document.getElementById("zone5heart").setHTML(maxHeartrate(age,0.9) + " - " + (maxHeartrate(age,1)));


const goal = localStorage.getItem("goal");
const race = localStorage.getItem("race");
console.log(goal);
console.log(race);
//find goal pace
const racePace = (goal, race) => new Date((goal / race) * 1000).toISOString().substr(14,5);

//goal pace
let p = document.createElement("p")
document.getElementById("headerRh").append(racePace(goal, race),p);
//modifier 
let mod = 0;
if(race == "5"){
 mod = 1;
}
if(race == "10"){
 mod = 0.95;
}
if(race == "21.0975"){
 mod = 0.9;
}
if(race == "42.195"){
mod = 0.86;
}
//zone pace
document.getElementById("zone1pace").setHTML(racePace(goal * (mod + 0.45), race) + " - " + racePace(goal * (mod + 0.5), race));
document.getElementById("zone2pace").setHTML(racePace(goal * (mod + 0.35), race) + " - "+ racePace(goal * (mod + 0.43), race));
document.getElementById("zone3pace").setHTML(racePace(goal * (mod + 0.2), race)+" - "+ racePace(goal * (mod + 0.27), race));
document.getElementById("zone4pace").setHTML(racePace(goal * (mod + 0.05), race)+" - "+ racePace(goal * (mod + 0.1), race));
document.getElementById("zone5pace").setHTML(racePace(goal * (mod - 0.1), race)+" - "+ racePace(goal * (mod - 0), race));

//return workouts from JSON 

fetch("/Rhedeg/workouts.json")
.then(response => response.json())
.then(data => {
    console.log(data.workouts[0].name);
    document.getElementById("zone1_workout_name").innerText = data.workouts[0].name
    document.getElementById("zone1_workout_summary").innerText = data.workouts[0].summary
})


}


//goal = 20 minute
// distance = 5k
// goal pace = 4:00
// tempo = goal pace


//goal = 40 minute 
// distancec = 10k 
//goal pace 4:00 
//tempo = 3:55