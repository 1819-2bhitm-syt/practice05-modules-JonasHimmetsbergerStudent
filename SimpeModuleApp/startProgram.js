let decrementsPerSecond = 1;

let startProgram = function(waitTime, programName, program) {
    console.log("*** Starting " + programName + " in " + waitTime + " seconds ***");

    let timer = setInterval(() => {
        waitTime--
    }, 1000 / decrementsPerSecond);

    setTimeout(() => {
        clearInterval(timer);
        console.log("*** Starting " + programName + " ***");
        program();
    }, waitTime * 1000 / decrementsPerSecond + 100);
};

module.exports.startProgram = startProgram;