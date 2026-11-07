// Question 8: Leap Year Checker

var year = +prompt("Enter Year:")

if(year % 400 === 0 && year % 4 === 0 || year % 100 !== 0) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not leap year`);
    
}