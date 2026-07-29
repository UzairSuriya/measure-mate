const btnEl = document.getElementById("btn-el")
let lengthTxt = document.getElementById("length-txt")
let volumeTxt = document.getElementById("volume-txt")
let massTxt = document.getElementById("mass-txt")
const inputEl = document.getElementById("input-el");

inputEl.addEventListener("input", function () {
    const length = inputEl.value.length;

    if (length > 5) {
        inputEl.style.fontSize = "32px";
    } else if (length > 3) {
        inputEl.style.fontSize = "42px";
    } else {
        inputEl.style.fontSize = "58px";
    }

    if (length > 2) {

        const newWidth = 117 + (length - 2) * 22;

        inputEl.style.width = Math.min(newWidth, 350) + "px";
    } else {
        inputEl.style.width = "117px";
    }
});

btnEl.addEventListener("click", function a() {
    let userInput = document.getElementById("input-el").value
    let meter = userInput
    let feet = (meter * 3.281).toFixed(3)
    let feet2 = userInput
    let meter2 = (feet2 * 0.3048).toFixed(3)
    if (meter > 1) {
        lengthTxt1 = `${meter} meters = ${feet} feet | `
    }else {
        lengthTxt1 = `${meter} meter = ${feet} feet | `
    }
    if (feet2 > 1) {
        lengthTxt2 = `${feet2} feet = ${meter2} meters`
    }else {
        lengthTxt2 = `${feet2} feet = ${meter2} meter`
    }
    lengthTxt.innerHTML = lengthTxt1 + lengthTxt2

    let liter = userInput
    let gallon = (liter * 0.264).toFixed(3)
    let gallon2 = userInput
    let liter2 = (gallon2 * 3.785).toFixed(3)
    if (liter > 1) {
        volumeTxt1 = `${liter} liters = ${gallon} gallons | `
    }else {
        volumeTxt1 = `${liter} liter = ${gallon} gallon | `
    }
    if (gallon2 > 1) {
        volumeTxt2 = `${gallon2} gallons = ${liter2} liters`
    }else {
        volumeTxt2 = `${gallon2} gallon = ${liter2} liter`
    }
    volumeTxt.innerHTML = volumeTxt1 + volumeTxt2

    let kilo = userInput
    let pounds = (kilo * 2.204).toFixed(3)
    let pound2 = userInput
    let kilo2 = (pound2 * 0.453).toFixed(3)
    if (kilo > 1) {
        massTxt1 = `${kilo} kilos = ${pounds} pounds| `
    }else {
        massTxt1 = `${kilo} kilo = ${pounds} pound | `
    }
    if (pound2 > 1) {
        massTxt2 = `${pound2} pounds = ${kilo2} kilos`
    }else {
        massTxt2 = `${pound2} pound = ${kilo2} kilo`
    }
    massTxt.innerHTML = massTxt1 + massTxt2

})