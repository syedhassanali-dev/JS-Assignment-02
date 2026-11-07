// Question 3: Voting Eligibility

var userAge = +prompt("Enter Your Age:")

if (userAge <= 0) {
    console.log("Invalid age");
    
} else if (userAge >= 18) {
    console.log("You are eligible to vote.");
    
} else {
    console.log("You are not eligible to vote.");
    
}