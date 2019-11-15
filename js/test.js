/**
 * Parses Opcode and calls its corresponding function
 * Increments PC + 4 as well
 */


chooseOperation();

function chooseOperation() {
    document.getElementById("registerTwo").value = 5;
    document.getElementById("registerThree").value = 5;
    // setRegisterVal("registerTwo", 5);
    // setRegisterVal("registerThree", 6);
    document.getElementById("filterMode").value = "r";
    document.getElementById("filterSigned").value = "u";
    
    var func = new Function("add();");
    incrementPc(4);
    printOperation();
    func();
}

