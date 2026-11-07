// Question 6: Student Grade Calculator

var userPercentage = +prompt("Enter Percentage:")

if (userPercentage < 0 || userPercentage > 100) {
    console.log("Invalid");

} else if (userPercentage >= 90 && userPercentage <= 100) {
    console.log("Your Grade is A+");

} else if (userPercentage >= 80) {
    console.log("Your Grade is A");

} else if (userPercentage >= 70) {
    console.log("Your Grade is B");

} else if (userPercentage >= 60) {
    console.log("Your Grade is C");

} else if (userPercentage >= 50) {
    console.log("Your Grade is D");

} else {
    console.log("Fail");
}