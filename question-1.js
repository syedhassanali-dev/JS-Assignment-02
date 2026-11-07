// Question 1: Positive, Negative or Zero

var userInput = +prompt("Enter a number:")

if (userInput > 0) {
    console.log(userInput, "is a positive number");
} else if (userInput < 0) {
    console.log(userInput, "is a negative number");
} else {
    console.log(userInput, "is zero");
}