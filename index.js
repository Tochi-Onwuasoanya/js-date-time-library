import Time from "./time.js"
// Create a Date() object for Christmas
//Can be modified for other variables. This is just an example
let christmas = new Time([2021, 11, 25], {
    days: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], 
});

console.log(christmas.date, christmas.settings);

// Get some details
let day = christmas.getDay();
let month = christmas.getMonth();
console.log(day, month);

// Modify and log the date
let newYear = christmas.addDays(7).addYears(1);
console.log(newYear,christmas);

