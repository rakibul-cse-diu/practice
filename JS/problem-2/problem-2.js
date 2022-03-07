var work1 = "01. unlock module on 8 o'clock";
var work2 = "02. watch the videos and practice them";
var work3 = "03. take notes from video";
var work4 = "04. practice full module after finish watch full module videos";
var work5 = "*** join to the support season";

var understand = true;

// For Loop :
// for (var i = 0; i < 10; i++) {
//     if (understand === true) {
//         console.log(`${work1}\n${work2}\n${work3}\n${work4}\n`);
//     } else {
//         console.log(work5);
//     }
// }


var i = 0;


while (i < 10) {

    console.log("loop", i);
    if (understand === true) {
        console.log(`${work1}\n${work2}\n${work3}\n${work4}\n`);
    } else {
        console.log(work5);
    }
    i++;
}