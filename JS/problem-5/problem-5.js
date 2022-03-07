// Detect Tempareture 
var cessius = 35;
var fahrenheit = 50;

tempInCelsius(cessius);
temoInFahrenheit(fahrenheit);

function tempInCelsius(tempareture) {
    return console.log(((9 / 5) * tempareture) + 32);
}

function temoInFahrenheit(tempareture) {
    return console.log((5 / 9) * (tempareture - 32));
}