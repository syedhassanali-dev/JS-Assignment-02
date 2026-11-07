// Question 7: Discount Eligibility

var userAmount = +prompt("Enter Total Purchase Amount:")

console.log("Original Amount: Rs.", userAmount);
var discount = 0

if (userAmount < 0) {
    console.log("Invalid purchase amount");

} else {
    if (userAmount >= 10000) {
        console.log("Discount: 20%");
        discount = userAmount / 5
        console.log("Discount Amount: Rs.", discount);

    } else if (userAmount >= 5000) {
        console.log("Discount: 10%");
        discount = userAmount / 10
        console.log("Discount Amount: Rs.", discount);

    } else if (userAmount >= 2000) {
        console.log("Discount: 5%");
        discount = userAmount / 20
        console.log("Discount Amount: Rs.", discount);

    } else {
        console.log("No Discount");
    }
    var finalAmount = userAmount - discount
    console.log("Final Amount: Rs.", finalAmount);
}

