/**
 * Parses Opcode and calls its corresponding function
 * Increments PC + 4 as well
 */

$(window).on('load', function() {
    addRegisterTest();
    addImmediateTest();
    beqTest()
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

function beqTest(){
    $("#filterOpcode").val("beq");
    $("#filterOpcode").trigger("change");
    
    $("#registerOne").val("v0");
    $("#registerTwo").val("v1");
    $("#immediate").val(3);

    setRegisterVal("registerOne", 1);
    setRegisterVal("registerTwo", 1);
    
    chooseOperation();
    console.log('The result is ' + pc);
}

function bneTest(){
    $("#filterOpcode").val("beq");
    $("#filterOpcode").trigger("change");
    
    $("#registerOne").val("v0");
    $("#registerTwo").val("v1");
    $("#immediate").val(3);

    setRegisterVal("registerOne", 1);
    setRegisterVal("registerTwo", 2);
    
    chooseOperation();
    console.log('The result is ' + pc);
}

function jTest(){
    $("#filterOpcode").val("j");
    $("#filterOpcode").trigger("change");
    
    $("#immediate").val(3);
    
    chooseOperation();
    console.log('The result is ' + pc);
}

function jrTest(){
    $("#filterOpcode").val("jr");
    $("#filterOpcode").trigger("change");
    
    $("#registerOne").val("v0");
    setRegisterVal("registerOne", 1);
    
    chooseOperation();
    console.log('The result is ' + pc);
}