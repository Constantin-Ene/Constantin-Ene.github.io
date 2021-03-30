var currentTemperature =25

function putOnCoat(temperature) {
    if (temperature < 50 && temperature > 30) {
        console.log("Put on coat");
    } else if (temperature < 30 && temperature > 0) {
        console.log("Put on a coat and a hat");
    } else if (temperature < 0) {
        console.log("Stay inside")
    } else {
        console.log("Pants and vest are fine")
    }
}

putOnCoat(currentTemperature)
console.log(putOnCoat(20));
console.log(putOnCoat(35));
console.log(putOnCoat(0));