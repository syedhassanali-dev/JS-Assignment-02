// Question 5: Login Authentication 

var userInputName = prompt("Enter your user name:")
var userInputPass = prompt("Enter your user password:")

var userName = "admin"
var userPass = "admin123"

if (userInputName === userName && userInputPass === userPass) {
    console.log("Login Successful! Welcome Admin.");

} else if (userInputName !== userName) {
    console.log("Invalid Username");

} else {
    console.log("Invalid Password");

}