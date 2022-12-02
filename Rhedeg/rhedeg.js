window.onload=function(){
    let btn = document.getElementById("paces");
btn.addEventListener('click', event => {
    gatherData();
    window.location='./Paces/paces.html';
})
};

function gatherData(){
//varaibles 
let race = "";
let age = 0;
let predicted = "00:00";
let goal = "00:00";

//What distance are you training for data.
const raceRadios = document.getElementsByName('raceDistance');

for (var i = 0, length = raceRadios.length; i < length; i++ ) { 
    if (raceRadios[i].checked) { 
        race = raceRadios[i].value;
        localStorage.setItem("race", race)
        console.log(race);
        break;
    }
}

//What is your age data
const ageField = document.getElementById('age').value
 if(ageField){ 
    age = ageField;
    localStorage.setItem("age", age)
    console.log(age);
 }


//What is your goal time
const goalField = document.getElementById('goalTime').value;
 if(goalField){ 
    goal = timeToSeconds(goalField);
    localStorage.setItem("goal", goal)
    console.log(goal);
 }
};


function timeToSeconds (timestr){ 
const a = timestr.split(':');
const result = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
return result;
}