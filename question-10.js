// Question 10: ATM Withdrawal System

var initialAmount = 25000
var pin = 1234
var userPin = +prompt("Enter Your Pin")
var withdrawal = +prompt("Enter Withdrawal Amount")


if (pin === userPin) {

    if (withdrawal <= 0 || withdrawal > initialAmount) {

        console.log("Invalid Withdrawal Amount Please Try Again");

    } else if (withdrawal % 500) {

        console.log("Amount must be a multiple of Rs. 500");

    } else {

        console.log("Withdrawal Successful!");
        console.log("Withdrawal Amount = ", withdrawal);
        var remainAmount = initialAmount - withdrawal
        console.log("Remaining Amount = ", remainAmount);

    }

} else {

    console.log("Invalid Pin, Please Try Again");

}
