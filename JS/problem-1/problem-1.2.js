// let Signal = window.prompt("You Can Enter The Signal Color(Ex: green, red, yellow)");

var Signal = 'Green';

var convertedSignal = Signal.toLowerCase();

if (convertedSignal === 'red') {
    console.log("Dont move! the signal is Red now");
} else if (convertedSignal === 'green') {
    console.log("You can go now... the signal is Red now");
} else if (convertedSignal === 'yellow') {
    console.log("Stop! the signal is Yellow now");
}