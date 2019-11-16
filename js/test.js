/**
 * Parses Opcode and calls its corresponding function
 * Increments PC + 4 as well
 */

$(window).on('load', function() {
    addRegisterTest();
    addImmediateTest();
    andRegisterTest();
    andImmediateTest();
    orRegisterTest();
    orImmediateTest();
    storeWordTest();
    loadWordTest();
    beqTest();
    bneTest();
    jTest();
    jrTest();
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

function addRegisterUnsignedTest() {
    $("#filterOpcode").val("add");
    $("#filterMode").val(""); // register: "", immediate: "i"
    $("#filterSigned").val("u"); // signed: "", unsigned: "u"

    $("#registerTwo").val("a0");
    setRegisterVal("registerTwo", -5);

    $("#registerThree").val("a1");
    setRegisterVal("registerThree", -6);

    chooseOperation();
    console.log('The result is ' + getRegisterVal("registerOne"));
}

function addImmediateUnsignedTest() {
    $("#filterOpcode").val("add");
    $("#filterMode").val("i"); // register: "", immediate: "i"
    $("#filterSigned").val("u"); // signed: "", unsigned: "u"

    $("#registerOne").val("v0");

    $("#registerTwo").val("a0");
    setRegisterVal("registerTwo", -6);

    $("#immediate").val(12);

    chooseOperation();
    console.log('The result is ' + getRegisterVal("registerOne"));
}

function addRegisterOverflowTest() {
    
    $("#filterOpcode").val("add");
    $("#filterMode").val(""); // register: "", immediate: "i"
    $("#filterSigned").val(""); // signed: "", unsigned: "u"

    $("#registerTwo").val("a0");
    setRegisterVal("registerTwo", 1);

    $("#registerThree").val("a1");
    setRegisterVal("registerThree", 2147483647);

    chooseOperation();
    console.log('The result is ' + getRegisterVal("registerOne"));
}

function addImmediateOverflowTest() {
    $("#filterOpcode").val("add");
    $("#filterMode").val("i"); // register: "", immediate: "i"
    $("#filterSigned").val(""); // signed: "", unsigned: "u"

    $("#registerOne").val("v0");

    $("#registerTwo").val("a0");
    setRegisterVal("registerTwo", 2147483647);

    $("#immediate").val(1);

    chooseOperation();
    console.log('The overflow result is ' + getRegisterVal("registerOne"));
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

function andRegisterTest() {
    
    $("#filterOpcode").val("and");
    $("#filterMode").val(""); // register: "", immediate: "i"
    // $("#filterSigned").val(""); // signed: "", unsigned: "u"

    $("#registerOne").val("v0");

    $("#registerTwo").val("a0");
    setRegisterVal("registerTwo", 5);

    $("#registerThree").val("a1");
    setRegisterVal("registerThree", 6);

    chooseOperation();
    console.log('The result is ' + getRegisterVal("registerOne"));
}

function andImmediateTest() {
    $("#filterOpcode").val("and");
    $("#filterMode").val("i"); // register: "", immediate: "i"
    // $("#filterSigned").val(""); // signed: "", unsigned: "u"

    $("#registerOne").val("v0");

    $("#registerTwo").val("a0");
    setRegisterVal("registerTwo", 6);

    $("#immediate").val(12);

    chooseOperation();
    console.log('The result is ' + getRegisterVal("registerOne"));
}

function orRegisterTest() {
    
    $("#filterOpcode").val("or");
    $("#filterMode").val(""); // register: "", immediate: "i"
    // $("#filterSigned").val(""); // signed: "", unsigned: "u"

    $("#registerOne").val("a0");

    $("#registerTwo").val("v0");
    setRegisterVal("registerTwo", 2);

    $("#registerThree").val("v1");
    setRegisterVal("registerThree", 3);

    chooseOperation();
    console.log('The result is ' + getRegisterVal("registerOne"));
}

function orImmediateTest() {
    
    $("#filterOpcode").val("or");
    $("#filterMode").val("i"); // register: "", immediate: "i"
    // $("#filterSigned").val(""); // signed: "", unsigned: "u"

    $("#registerOne").val("a0");

    $("#registerTwo").val("v0");
    setRegisterVal("registerTwo", 2);

    $("#immediate").val(5);

    chooseOperation();
    console.log('The result is ' + getRegisterVal("registerOne"));
}

function storeWordTest() {
    $("#filterOpcode").val("sw");
    // $("#filterMode").val("i"); // register: "", immediate: "i"
    // $("#filterSigned").val(""); // signed: "", unsigned: "u"

    $("#registerOne").val("zero");

    $("#registerTwo").val("t0");
    setRegisterVal("registerTwo", 6);

    $("#immediate").val(0);

    chooseOperation();
    console.log('The result is ' + getRegisterVal("registerTwo") + ' stored in memory location [0]' );
}

function loadWordTest() {

    $("#filterOpcode").val("sw");
    // $("#filterMode").val("i"); // register: "", immediate: "i"
    // $("#filterSigned").val(""); // signed: "", unsigned: "u"

    $("#registerOne").val("zero");
    $("#registerTwo").val("t0");
    setRegisterVal("registerTwo", 6);
    $("#immediate").val(0);
    chooseOperation();


    $("#filterOpcode").val("lw");
    // $("#filterMode").val("i"); // register: "", immediate: "i"
    // $("#filterSigned").val(""); // signed: "", unsigned: "u"
    $("#registerOne").val("a0");
    $("#registerTwo").val("zero");
    // setRegisterVal("registerTwo", 6);
    $("#immediate").val(0);

    chooseOperation();
    console.log('The value at memory location 0 loaded into register $a0 with ' + getRegisterVal("registerOne"));
}

