const Alia = {
    Name: 'Alia',
    marks: 95
};
const Dalia = {
    Name: 'Dalia',
    marks: 66
};
const Salia = {
    Name: 'Salia',
    marks: 80
};
const Malia = {
    Name: 'Malia',
    marks: 59
};
const Lilia = {
    Name: 'Lilia',
    marks: 47
};
const Jalia = {
    Name: 'Jalia',
    marks: 77
};



findGrade(Alia.Name, Alia.marks);
findGrade(Dalia.Name, Dalia.marks);
findGrade(Salia.Name, Salia.marks);
findGrade(Malia.Name, Malia.marks);
findGrade(Lilia.Name, Lilia.marks);
findGrade(Jalia.Name, Jalia.marks);






// Function For FInd their grades 
function findGrade(name, marks) {
    if (marks < 50) {
        console.log(`${name} is fail in exam`);
    } else if (marks >= 50 && marks < 60) {
        console.log(`${name}'s Grade is D`);
    } else if (marks >= 60 && marks < 70) {
        console.log(`${name}'s Grade is C`);
    } else if (marks >= 70 && marks < 80) {
        console.log(`${name}'s Grade is B`);
    } else if (marks >= 80 && marks < 90) {
        console.log(`${name}'s Grade is A`);
    } else if (marks >= 90 && marks <= 100) {
        console.log(`${name}'s Grade is A+`);
    } else {
        console.log(`Please Enter Marks Between 0 to 100`);
    }
}