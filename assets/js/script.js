var currentDayEl = document.querySelector("#currentDay");

currentDayEl.textContent = moment();

setInterval(function() {
    currentDayEl.textContent = moment(),format("dddd, MMMM Do YYYY");
}, 1000)