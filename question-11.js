var userUnit = +prompt("Units Consumed:")
var perRate = 0

if(userUnit < 0 || isNaN(userUnit)) {
    alert("Invalid Value")
} else {
    
    if(userUnit <= 100) {
        perRate = 10
    } else if(userUnit <= 200) {
        perRate = 15
    } else if(userUnit <= 300) {
        perRate = 20
    } else {
        perRate = 25
    }

    var electCharge = userUnit * perRate
    var serviceCharge = 150
    var tax = electCharge / 20
    var total = electCharge + serviceCharge + tax

    console.log(`Electricity Charges: Rs. ${electCharge}`);
    console.log(`Service Charges: Rs. ${serviceCharge}`);
    console.log(`Tax: Rs. ${tax}`);
    console.log(`Total Bill: Rs. ${total}`);
    
}