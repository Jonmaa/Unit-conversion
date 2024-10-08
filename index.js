/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthEl = document.querySelector("#length-el")
const volumeEl = document.querySelector("#volume-el")
const massEl = document.querySelector("#mass-el")
const convertBtn = document.querySelector("#convert-btn")
const inputEl = document.querySelector("#input-el")

convertBtn.addEventListener("click", function(){
    let inputNum = inputEl.value 
    inputEl.value = ""
    lengthEl.textContent = `${inputNum} meters = ${(inputNum * 3.281).toFixed(3)} feet | ${inputNum} feet = ${(inputNum * 0.305).toFixed(3)} meters`
    volumeEl.textContent = `${inputNum} liters = ${(inputNum * 0.264).toFixed(3)} gallons | ${inputNum} gallons = ${(inputNum * 4.546).toFixed(3)} liters`
    massEl.textContent = `${inputNum} kilograms = ${(inputNum * 2.204).toFixed(3)} pounds | ${inputNum} pounds = ${(inputNum * 0.454).toFixed(3)} kilograms`
})