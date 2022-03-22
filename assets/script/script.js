var todayDate = document.querySelector("#currentDay");
var date = moment();
var eightAM = document.querySelector("#eighthour");
var nineAM = document.querySelector("#ninehour");
var tenAM = document.querySelector("#tenhour");
var elevenAM = document.querySelector("#elevenhour");
var twelvePM = document.querySelector("#twelvehour");
var onePM = document.querySelector("#onehour");
var twoPM = document.querySelector("#twohour");
var threePM = document.querySelector("#threehour");
var fourPM = document.querySelector("#fourhour");
var fivePM = document.querySelector("#fivehour");

// Create variables for each task holder
var eightTaskEl = document.querySelector("#eighthourtask");
var nineTaskEl = document.querySelector("#ninehourtask");
var tenTaskEl = document.querySelector("#tenhourtask");
var elevenTaskEl = document.querySelector("#elevenhourtask");
var twelveTaskEl = document.querySelector("#twelvehourtask");
var oneTaskEl = document.querySelector("#onehourtask");
var twoTaskEl = document.querySelector("#twohourtask");
var threeTaskEl = document.querySelector("#threehourtask");
var fourTaskEl = document.querySelector("#fourhourtask");
var fiveTaskEl = document.querySelector("#fivehourtask");

//locate the element using ID for adding information
var btn8 = document.getElementById("saveBtn8");
var btn9 = document.getElementById("saveBtn9");
var btn10 = document.getElementById("saveBtn10");
var btn11 = document.getElementById("saveBtn11");
var btn12 = document.getElementById("saveBtn12");
var btn1 = document.getElementById("saveBtn1");
var btn2 = document.getElementById("saveBtn2");
var btn3 = document.getElementById("saveBtn3");
var btn4 = document.getElementById("saveBtn4");
var btn5 = document.getElementById("saveBtn5");

// Set the hour based on the single number format
var currentHour = parseInt(moment().format("H"));

//Select the elements using class for information for tasks
var rows = document.getElementsByClassName("description")

Array.from(rows).forEach(description => {
    let descriptionIdString = description.id,
        descriptionHour;
    if (descriptionIdString) {
        descriptionHour = parseInt(descriptionIdString);
    }
    if (descriptionHour) {
        if (currentHour === descriptionHour) {
            setColor(description, "red");
        } else if (currentHour < descriptionHour) {
            setColor(description, "lightgreen");
        } else if (currentHour > descriptionHour) {
            setColor(description, "lightgrey");
        } else {
            setColor(description, "white")
        }
    }
});

// changes the background colors for the task element
function setColor(element, color) {
    element.style.backgroundColor = color;
}

// place today's date into the DOM
todayDate.textContent = "Today's date is " + date.format("MMM-DD-YYYY");



// Set tasks from either local storage or have "enter task" as a placeholder
document.getElementById("8").innerHTML = localStorage["eighthourtask"] || "enter task";
document.getElementById("9").innerHTML = localStorage["ninehourtask"] || "enter task";
document.getElementById("10").innerHTML = localStorage["tenhourtask"] || "enter task";
document.getElementById("11").innerHTML = localStorage["elevenhourtask"] || "enter task";
document.getElementById("12").innerHTML = localStorage["twelvehourtask"] || "enter task";
document.getElementById("13").innerHTML = localStorage["onehourtask"] || "enter task";
document.getElementById("14").innerHTML = localStorage["twohourtask"] || "enter task";
document.getElementById("15").innerHTML = localStorage["threehourtask"] || "enter task";
document.getElementById("16").innerHTML = localStorage["fourhourtask"] || "enter task";
document.getElementById("17").innerHTML = localStorage["fivehourtask"] || "enter task";

// Grab information from task bar to save into localStorage
function saveEight() {
    localStorage["eighthourtask"] = document.getElementById("8").innerHTML;
};
function saveNine() {
    localStorage["ninehourtask"] = document.getElementById("9").innerHTML
};
function saveTen() {
    localStorage["tenhourtask"] = document.getElementById("10").innerHTML;
};
function saveEleven() {
    localStorage["elevenhourtask"] = document.getElementById("11").innerHTML;
};
function saveTwelve() {
    localStorage["twelvehourtask"] = document.getElementById("12").innerHTML;
};
function saveOne() {
    localStorage["onehourtask"] = document.getElementById("13").innerHTML;
};
function saveTwo() {
    localStorage["twohourtask"] = document.getElementById("14").innerHTML;
};
function saveThree() {
    localStorage["threehourtask"] = document.getElementById("15").innerHTML;
};
function saveFour() {
    localStorage["fourhourtask"] = document.getElementById("16").innerHTML;
};
function saveFive() {
    localStorage["fivehourtask"] = document.getElementById("17").innerHTML;
};

// push information into localStorage by pushing button
btn8.addEventListener("click", saveEight);
btn9.addEventListener("click", saveNine);
btn10.addEventListener("click", saveTen);
btn11.addEventListener("click", saveEleven);
btn12.addEventListener("click", saveTwelve);
btn1.addEventListener("click", saveOne);
btn2.addEventListener("click", saveTwo);
btn3.addEventListener("click", saveThree);
btn4.addEventListener("click", saveFour);
btn5.addEventListener("click", saveFive);


