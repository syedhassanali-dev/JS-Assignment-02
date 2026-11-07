// Question 15: Employee Salary & Bonus System 

var basicSal = +prompt("Basic Salary:")
var yearService = +prompt("Year of Service:")


if(yearService < 0 || basicSal < 0 || isNaN(yearService) || isNaN(basicSal)) {
    console.log("Invalid Value");
    
} else {
    
    console.log("Basic Salary: Rs.", basicSal);
    var bonusRate = 0
   
    if (yearService < 1) {
        bonusRate = 0
    } else if (yearService < 3) {
        bonusRate = basicSal / 20

        console.log("Bonus: Rs.", bonusRate);

    } else if (yearService < 5) {
        bonusRate = basicSal / 10

        console.log("Bonus: Rs.", bonusRate);

    } else {
        bonusRate = basicSal / 15

        console.log("Bonus: Rs.", bonusRate);
    }

    var tax;

    if (basicSal >= 100000) {
        tax = basicSal * 5 / 100
        console.log("Tax: Rs.", tax);

    } else {
        tax = basicSal * 2 / 100
        console.log("Tax: Rs.", tax);

    }

    var finalSal = basicSal + bonusRate - tax
    console.log("Final Salary: Rs.", finalSal);

}
