// Основа игры

let counter = 0;
let forClick = 1;
let autoClick = 0;

let counterForClick = document.getElementById("counterForClick");
let counterForSec = document.getElementById("counterForSec");
let clickerCounter = document.getElementById("clickerCounter");
let btnClicker = document.getElementById("btnClicker");

btnClicker.onclick = function () {
    counter  = counter + forClick;
    clickerCounter.textContent = counter;
}

// Магазин

// one for click

let oneClick = document.getElementById("oneClick");
let infoPriceOneClick = document.getElementById("infoPriceOneClick");
let oneClickPrice = 10;

oneClick.onclick = function () {
    if (counter >= oneClickPrice) {
        forClick = forClick + 1;
        counter = counter - oneClickPrice;
        counterForClick.textContent = `${forClick} за клик`;
        oneClickPrice = Math.round((oneClickPrice * 3) / 2);
        clickerCounter.textContent = counter;
        infoPriceOneClick.textContent = oneClickPrice;
    } else {
        alert("У вас не достаточно денег");
    }
}

// auto clicker
let oneAuto = document.getElementById("oneAuto");
let infoPriceOneAuto = document.getElementById("infoPriceOneAuto")
let stopper = setInterval(autoClicker, 1000);
let oneAutoPrice = 100;

function autoClicker () {
    counter = counter + autoClick;
    clickerCounter.textContent = counter;
    stopper;
}

oneAuto.onclick = function() {
    if (counter >= oneAutoPrice) {
        counter = counter - oneAutoPrice;
        clickerCounter.textContent = counter
        autoClick = autoClick + 1;
        counterForSec.textContent = `${autoClick} в секунду`;
        oneAutoPrice = Math.round((oneAutoPrice * 3) / 2);
        infoPriceOneAuto.textContent = oneAutoPrice;
        autoClicker();
    } else {
        alert("У вас не достаточно денег")
    }
}