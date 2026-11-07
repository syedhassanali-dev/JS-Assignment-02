// Question 4: Find the Largest Number

var userNumber1 = +prompt("Enter first number")
var userNumber2 = +prompt("Enter second number")
var userNumber3 = +prompt("Enter third number")

if (userNumber1 >= userNumber2 && userNumber1 >= userNumber3) {
    console.log(`${userNumber1} is the largest number.`);

} else if (userNumber2 >= userNumber1 && userNumber2 >= userNumber3) {
    console.log(`${userNumber2} is the largest number.`);

} else {
    console.log(`${userNumber3} is the largest number.`);

}