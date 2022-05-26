const leapYears = function(year) {

let isLeapYear = ''
let recheck = ''

    if ((year % 4 === 0) && (year % 100 !==0)) {
        isLeapYear += year;
        
        } else if 
        
        (year % 100 === 0) {
        recheck += year;
        }

    if (recheck % 400 === 0) {
        isLeapYear += recheck;
    }

    if (isLeapYear) {
        return true;
    } else {
        return false;
    }
}

// Do not edit below this line
module.exports = leapYears;
