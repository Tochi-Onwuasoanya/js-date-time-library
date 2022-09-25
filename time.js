
 //Where the library is kept

//Package these functions into a library in order to help users to better work/manipulate with dates 
/* Function to keep helper functions scoped and encapsulated */

//Constructor object
function Constructor(date, options = {}){ //Will accept the date that needs to be instantiated.
    if(!Array.isArray(date)){
    date = [date];

     }                                       

  let settings = Object.assign(
  {
 months: [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December",
 ], 
 days:[
        "Sunday", 
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday",
 ],
  },
  options
  );
  Object.freeze(settings); //Prevents settings from being modified 
      
  
  Object.defineProperties(this, {
    date: {
        value: new Date(...date),
 },
     settings: {
      value: settings, 
    },
 });
   
}

/*
 *  
    Get the day of the week
 *  @param  {Date}   date  The date object
 *  @return {String}       The day of the week
 */
 Constructor.prototype.getDay = function() {

	return this.settings.days[this.date.getDay()];
}

/* Immediatly invoked function expression--> a function that runs itself as soon as the file loads rather than you having to explicitly run it



*/
/**
 * Get the month of the year
 * @param  {Date}   date  The date object
 * @return {String}       The month of the year
 */
 Constructor.prototype.getMonth = function () {
	
	return this.settings.months[this.date.getMonth()];
}
/*
Set date and get date are native methods of the date object and we're combining them to add days
Add days is a nice abstraction so you don't have to do this stuff by hand 

*/
/**
 * Add days to a date
 * @param {Date}    date The date object
 * @param {Integer} n    The number of days to add
 */
 Constructor.prototype.addDays = function( n) {
    let d = new Date(this.date)
	d.setDate(this.date.getDate() + n);
    return new Constructor(d);
}

/**
 * Add months to a date
 * @param {Date}    date The date object
 * @param {Integer} n    The number of months to add
 */
 Constructor.prototype.addMonths = function (n) {
    let d = new Date(this.date)
	d.setMonth(this.date.getMonth() + n);
    return new Constructor(d);
}

/**
 * Add years to a date
 * @param {Date}    date The date object
 * @param {Integer} n    The number of years to add
 */
 Constructor.prototype.addYears = function (n) {
    let d = new Date(this.date)
	d.date.setFullYear(this.date.getFullYear() + n);
    return new Constructor(d);
}
//So that people can export just the functions they need from the library using a build tool
export default Constructor;

