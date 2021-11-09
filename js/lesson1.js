"use strict"
function getName() {
    let yourName = prompt("What is your name?");
    alert(`Hello ${yourName}`)
};
function getAge() {
    const YEAR = 2021;
    let yearBirth = +prompt("Year of your birth?");
    alert(`You are ${YEAR - yearBirth} years`)
};

function getPerimetr() {
    let side = +prompt("What is a side of a aquqre (cm)?");
    alert(`P= ${(side * 4)} cm`)
};

function getSquare() {
    let circleR = +prompt("What is a radius of a circle (cm)?");
    alert(`S=${Math.PI * circleR * circleR} cm2`)
};

function getSpeed() {
    let lenght = +prompt("What is a lenght (km)?");
    let time = +prompt("What is a time for travel (in hours)?");
    alert(`V= ${lenght / time} km/h`)
};
function exchDollar() {
    const CURS = 0.86;
    let howDollars = +prompt("How many dollars do you want to convert into euros?");
    alert(`You have ${CURS * howDollars} euros`)
};

function getFiles() {
    let volumeF = +prompt("What is the size of the flash drive in GB?");
    alert(`You can copy ${(volumeF * 1024 / 820).toFixed(0)} files`)
};

function getСhocolate() {
    let moneyWallet = +prompt("How much money in your wallet (dollars)?");
    let costChocolate = +prompt("What is the cost of chocolate (dollars)?");
    let buyChocolate = ((moneyWallet / costChocolate).toFixed(0))
    alert(`You can buy ${buyChocolate} chocolates`);
    alert(`You will have $ ${moneyWallet - buyChocolate * costChocolate} left`);
};

function getReverseNumber() {
    let getNumber = +prompt("What is a number do you want to convert?");
    var str = String(getNumber);

    let a = str.split("");

    let b = a.reverse();

    var str = b.join("");

    getNumber = str;

    getNumber = Number(getNumber);

    alert(`Resault of reverse is ${getNumber}`);
};
