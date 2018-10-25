const startProgram = require("./startProgram");

function program1() {
    console.log("This is Program 1!");
}

function program2() {
    console.log("This is Program 2!");
}

function program3() {
    console.log("This is Program 3!");
}

startProgram.startProgram(15, "Program 1", program1);
startProgram.startProgram(20, "Program 2", program2);
startProgram.startProgram(10, "Program 3", program3);