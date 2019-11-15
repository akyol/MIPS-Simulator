/**
 * Parses Opcode and calls its corresponding function
 * Increments PC + 4 as well
 */

$(window).on('load', function() {
    // addRegisterTest();
    // addImmediateTest();
    // andRegisterTest();
    // andImmediateTest();
    // orRegisterTest();
    // orImmediateTest();
    // storeWordTest();
    // loadWordTest();
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
    console.log('The value at memory locatoin 0 loaded into ' + getRegisterVal("registerOne"));
}

