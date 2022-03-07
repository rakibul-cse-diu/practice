// 01. find smallest number from an array 
var num = [48, 32, 31, 68, 44, 35];
var num1 = 20;
var num2 = 52;
var num3 = 47;

findSmallestNumberFromArray(num);
checkSmallNumber(num1, num2, num3);
findMeanFromArray(num);
findSecondLargestNumberFromArray(num);


function findSmallestNumberFromArray(array) {
    array.sort();
    var smallNumber = array[array.length - 1];

    for (var i = 0; i < array.length; i++) {
        if (array[i] <= smallNumber) {
            smallNumber = array[i];
        } else {
            smallNumber = smallNumber;
        }
    }

    return console.log(`Smallest number from the array is ${smallNumber}`);
}


// Check the smallest number from three number 
function checkSmallNumber(num1, num2, num3) {
    var smallNumber = 0;
    if (num1 < num2 && num1 < num3) {
        smallNumber = num1;
    } else if (num2 < num3) {
        smallNumber = num2;
    } else {
        smallNumber = num3;
    }

    return console.log(`small number from this three number is ${smallNumber}`);
}



// Find Mean from an Array 
function findMeanFromArray(array) {
    var temp = 0;
    var mean = 0;

    for (var i = 0; i < array.length; i++) {
        temp = temp + array[i];
        mean = temp / array.length;
    }

    return console.log(`mean of this array is ${mean}`);
}



// Find second largest number from an Array 
function findSecondLargestNumberFromArray(array) {
    array.sort();
    var secondSmallNumber = array[array.length - 2];

    return console.log(`The second largest number in this array is ${secondSmallNumber}`);

}