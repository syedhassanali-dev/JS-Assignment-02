// Question 12: Student Result System 

var engMark = +prompt("Enter Your English Marks")
var mathMark = +prompt("Enter Your Mathematics Marks")
var sciMark = +prompt("Enter Your Science Marks")
var comMark = +prompt("Enter Your Computer Marks")
var urdMark = +prompt("Enter Your Urdu Marks")

if (
    engMark < 0 || engMark > 100 ||
    mathMark < 0 || mathMark > 100 ||
    sciMark < 0 || sciMark > 100 ||
    comMark < 0 || comMark > 100 ||
    urdMark < 0 || urdMark > 100
) {
    alert("Invalid Marks");

} else {
    var totalMark = 500
    var obtMarks = engMark + mathMark + sciMark + comMark + urdMark
    var pers = obtMarks / totalMark * 100

    console.log(`Total Marks: ${totalMark}`);
    console.log(`Obtained Marks: ${obtMarks}`);
    console.log(`Percentage: ${Math.floor(pers)}%`);
    
    if (pers >= 90) {
        console.log("Grade: A+");

    } else if (pers >= 80) {
        console.log("Grade: A");

    } else if (pers >= 70) {
        console.log("Grade: B");

    } else if (pers >= 60) {
        console.log("Grade: C");

    } else if (pers >= 50) {
        console.log("Grade: D");

    } else {
        alert("Fail");
    }

    if (
        engMark < 40 ||
        mathMark < 40 ||
        sciMark < 40 ||
        comMark < 40 ||
        urdMark < 40
    ) {
        console.log(`Result: FAIL`);

    } else {
        console.log(`Result: PASS`);

    }

    
}
