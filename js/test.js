/**
 * Parses Opcode and calls its corresponding function
 * Increments PC + 4 as well
 */

$(window).on('load', function() {
    addRegisterTest();
    addImmediateTest();
});


function addRegisterTest() {
    
    $("#filterOpcode").val("add");
    $("#filterMode").val(""); // register: "", immediate: "i"
    $("#filterSigned").val(""); // signed: "", unsigned: "u"

    $("#registerTwo").val("a0");
    setRegisterVal("registerTwo", 5);

    $("#registerThree").val("a1");
    setRegisterVal("registerThree", 6);

    chooseOperation();
    console.log('The result is ' + getRegisterVal("registerOne"));
}

function addImmediateTest() {
    $("#filterOpcode").val("add");
    $("#filterMode").val("i"); // register: "", immediate: "i"
    $("#filterSigned").val(""); // signed: "", unsigned: "u"

    $("#registerOne").val("v0");

    $("#registerTwo").val("a0");
    setRegisterVal("registerTwo", 6);

    $("#immediate").val(12);

    chooseOperation();
    console.log('The result is ' + getRegisterVal("registerOne"));
}

