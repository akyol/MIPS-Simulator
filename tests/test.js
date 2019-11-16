/**
 * Parses Opcode and calls its corresponding function
 * Increments PC + 4 as well
 */

// next test to do
var testCount = -1;

// tests to do
var tests = [addRegisterTest, addImmediateTest, addRegisterUnsignedTest, addImmediateUnsignedTest,
            addRegisterOverflowTest, addImmediateOverflowTest, andRegisterTest, andImmediateTest,
            orRegisterTest, orImmediateTest, storeWordTest, loadWordTest, beqTest,
            bneTest, jTest, jrTest];

// when next button is clicked load next arguments
$(window).on('load', function () {
    $("#next").on("click", function (event) {
        if (testCount < tests.length) {
            resetArguments();
            testCount++;
            $("textarea").text(tests[testCount].toString() + "\n\n");
            tests[testCount]();
        } else {
            resetArguments();
            $("textarea").text("Tests Finished");
        }
    });
    $("#prev").on("click", function (event) {
        if (testCount > 0) {
            resetArguments();
            testCount--;
            $("textarea").text(tests[testCount].toString() + "\n\n");
            tests[testCount]();
        }
    });
});

// reset all arguments
function resetArguments() {
    pc = 0;
    $("#pc").html(pc);
    $("textarea").text("");
    $("#immediate").val(0);
    for (var i = 0; i < registers.length; i++) {
        $("#" + registers[i]).val(0);
    }
}

// tests if add register based works accordingly
function addRegisterTest() {
    $("#filterOpcode").val("add");
    $("#filterMode").val(""); // register: "", immediate: "i"
    $("#filterSigned").val(""); // signed: "", unsigned: "u"

    $("#filterOpcode").trigger("change");

    $("#registerTwo").val("a0");
    setRegisterVal("registerTwo", 5);

    $("#registerThree").val("a1");
    setRegisterVal("registerThree", 6);
}

// tests if add immediate based works accordingly
function addImmediateTest() {
    $("#filterOpcode").val("add");
    $("#filterMode").val("i"); // register: "", immediate: "i"
    $("#filterSigned").val(""); // signed: "", unsigned: "u"

    $("#filterOpcode").trigger("change");

    $("#registerOne").val("v0");

    $("#registerTwo").val("a0");
    setRegisterVal("registerTwo", 6);

    $("#immediate").val(12);
}

function addRegisterUnsignedTest() {
    $("#filterOpcode").val("add");
    $("#filterMode").val(""); // register: "", immediate: "i"
    $("#filterSigned").val("u"); // signed: "", unsigned: "u"

    $("#filterOpcode").trigger("change");

    $("#registerOne").val("v0");

    $("#registerTwo").val("a0");
    setRegisterVal("registerTwo", -5);

    $("#registerThree").val("a1");
    setRegisterVal("registerThree", -6);
}

function addImmediateUnsignedTest() {
    $("#filterOpcode").val("add");
    $("#filterMode").val("i"); // register: "", immediate: "i"
    $("#filterSigned").val("u"); // signed: "", unsigned: "u"

    $("#filterOpcode").trigger("change");

    $("#registerOne").val("v0");

    $("#registerTwo").val("a0");
    setRegisterVal("registerTwo", -6);

    $("#immediate").val(12);
}

function addRegisterOverflowTest() {
    
    $("#filterOpcode").val("add");
    $("#filterMode").val(""); // register: "", immediate: "i"
    $("#filterSigned").val(""); // signed: "", unsigned: "u"

    $("#filterOpcode").trigger("change");

    $("#registerTwo").val("a0");
    setRegisterVal("registerTwo", 1);

    $("#registerThree").val("a1");
    setRegisterVal("registerThree", 2147483647);
}

function addImmediateOverflowTest() {
    $("#filterOpcode").val("add");
    $("#filterMode").val("i"); // register: "", immediate: "i"
    $("#filterSigned").val(""); // signed: "", unsigned: "u"

    $("#filterOpcode").trigger("change");

    $("#registerOne").val("v0");

    $("#registerTwo").val("a0");
    setRegisterVal("registerTwo", 2147483647);

    $("#immediate").val(1);
}

// tests if beq works accordingly
function beqTest(){
    $("#filterOpcode").val("beq");
    $("#filterOpcode").trigger("change");
    
    $("#registerOne").val("v0");
    $("#registerTwo").val("v1");
    $("#immediate").val(3);

    setRegisterVal("registerOne", 1);
    setRegisterVal("registerTwo", 1);
}

// tests if bne works accordingly
function bneTest(){
    $("#filterOpcode").val("bne");
    $("#filterOpcode").trigger("change");
    
    $("#registerOne").val("v0");
    $("#registerTwo").val("v1");
    $("#immediate").val(3);

    setRegisterVal("registerOne", 1);
    setRegisterVal("registerTwo", 2);
}

// tests if j works accordingly
function jTest(){
    $("#filterOpcode").val("j");
    $("#filterOpcode").trigger("change");
    
    $("#immediate").val(3);
}

// tests if jr works accordingly
function jrTest(){
    $("#filterOpcode").val("jr");
    $("#filterOpcode").trigger("change");
    
    $("#registerOne").val("v0");
    setRegisterVal("registerOne", 1);
}

// tests if and register based works accordingly
function andRegisterTest() {
    $("#filterOpcode").val("and");
    $("#filterMode").val(""); // register: "", immediate: "i"

    $("#filterOpcode").trigger("change");

    $("#registerOne").val("v0");

    $("#registerTwo").val("a0");
    setRegisterVal("registerTwo", 5);

    $("#registerThree").val("a1");
    setRegisterVal("registerThree", 6);
}

// tests if and immediate based works accordingly
function andImmediateTest() {
    $("#filterOpcode").val("and");
    $("#filterMode").val("i"); // register: "", immediate: "i"

    $("#filterOpcode").trigger("change");

    $("#registerOne").val("v0");

    $("#registerTwo").val("a0");
    setRegisterVal("registerTwo", 6);

    $("#immediate").val(12);
}

// tests if or register based works accordingly
function orRegisterTest() {
    $("#filterOpcode").val("or");
    $("#filterMode").val(""); // register: "", immediate: "i"

    $("#filterOpcode").trigger("change");

    $("#registerOne").val("a0");

    $("#registerTwo").val("v0");
    setRegisterVal("registerTwo", 2);

    $("#registerThree").val("v1");
    setRegisterVal("registerThree", 3);
}

// tests if or immediate based works accordingly
function orImmediateTest() {
    $("#filterOpcode").val("or");
    $("#filterMode").val("i"); // register: "", immediate: "i"

    $("#filterOpcode").trigger("change");

    $("#registerOne").val("a0");

    $("#registerTwo").val("v0");
    setRegisterVal("registerTwo", 2);

    $("#immediate").val(5);
}

// tests if store word works accordingly
function storeWordTest() {
    $("#filterOpcode").val("sw");

    $("#filterOpcode").trigger("change");

    $("#registerOne").val("zero");

    $("#registerTwo").val("t0");
    setRegisterVal("registerTwo", 6);

    $("#immediate").val(0);
}

// tests if load word works accordingly
function loadWordTest() {
    $("#filterOpcode").val("lw");

    $("#filterOpcode").trigger("change");

    memory[0] = 10;
    $("#m0").html(10);

    $("#registerOne").val("a0");

    $("#registerTwo").val("zero");

    $("#immediate").val(0);
}