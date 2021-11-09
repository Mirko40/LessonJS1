"use strict"
function whatName() {
    let yourName = prompt("What is your name?");
    alert("Hello" + " " + yourName)
};
function whatAge() {
    const YEAR = 2021;
    let yearBirth = +prompt("Year jf birth?");
    alert("You are" + " " + (YEAR - yearBirth) + " " + "years")
};

function whatPerimetr() {
    let side = +prompt("What is a side of a aquqre (cm)?");
    alert("P=" + (side * 4) + "cm")
};

function whatSquare() {
    let circleR = +prompt("What is a radius of a circle (cm)?");
    alert("S=" + (Math.PI * circleR * circleR) + "cm2")
};

function whatSpeed() {
    let lenght = +prompt("What is a lenght (km)?");
    let time = +prompt("What is a time for travel (hours)?");
    alert("V=" + (lenght / time) + "km/h")
};


