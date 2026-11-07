// Question 9: Job Eligibility Checker

var userAge = +prompt("Enter Your Age:")
var userYear = +prompt("Enter Your Experience Year (minimum 1 year):")
var userJsKnow = prompt("Enter Your JavaScript Knowladge (yes or no):")

if (userAge < 0 || userYear < 0) {
    console.log("Invalid Value");

} else if (userAge >= 18 && userAge <= 30 && userYear >= 1 && userJsKnow === "yes") {
    console.log("Congratulations! You are eligible to apply.")

} else {
    console.log("Sorry! You do not meet the requirements.")

}