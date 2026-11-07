// Question 14: Cinema Ticket Booking System 

var age = +prompt(`Enter Your Age`)
var dayType = prompt(`Enter Day Type (weekday or weekend)`)

var tickPri = 0

if (age < 0 || isNaN(age)) {
    console.log("Invalid Age");

} else {

    if (age < 5) {
        console.log("Ticket Free");

    } else if (age <= 12) {
        tickPri = 300
        console.log("Base Ticket Price: Rs.", tickPri);

    } else if (age <= 59) {
        tickPri = 700
        console.log("Base Ticket Price: Rs.", tickPri);

    } else {
        tickPri = 400
        console.log("Base Ticket Price: Rs.", tickPri);

    }

    var weekendCharg = 100

    if (dayType === "weekend") {
        console.log("Weekend Surcharge: Rs.", weekendCharg);

        var finalPri = weekendCharg + tickPri
        console.log("Final Ticket Price: Rs.", finalPri);

    }

}