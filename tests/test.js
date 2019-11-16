/**
 * Abraham Lee, Tammy Vo, Jonathan Kim
 * TCSS 472
 * Project 1
 */


/**
* Test cases for MIPS Simulator
*/


// next test to do
var testCount = -1;

// tests to do
var tests = [addRegisterTest, addImmediateTest, addRegisterUnsignedTest, addImmediateUnsignedTest,
    addRegisterOverflowTest, addImmediateOverflowTest, andRegisterTest, andImmediateTest,
    orRegisterTest, orImmediateTest, storeWordTest, loadWordTest, beqTest, beqNotTest,
    bneTest, bneNotTest, jTest, jrTest, zeroWriteTest];

// when next button is clicked load next arguments
$(window).on('load', function () {
    $("#next").on("click", function (event) {
        if (testCount < tests.length - 1) {
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
    for (var i = 0; i < 10; i++) {
        memory[i] = 0;
        $("#m" + i).html(0);
    }
}

/**
 * tests if add register based works accordingly
 */
function addRegisterTest() {
    $("#filterOpcode").val("add");
    $("#filterMode").val(""); // register: "", immediate: "i"
    $("#filterSigned").val(""); // signed: "", unsigned: "u"

    $("#filterOpcode").trigger("change");

    $("#registerOne").val("v0");

    $("#registerTwo").val("a0");
    setRegisterVal("registerTwo", 5);

    $("#registerThree").val("a1");
    setRegisterVal("registerThree", 6);

    // look for $v0 = 11
}

/**
 * tests if add immediate based works accordingly
 */
function addImmediateTest() {
    $("#filterOpcode").val("add");
    $("#filterMode").val("i"); // register: "", immediate: "i"
    $("#filterSigned").val(""); // signed: "", unsigned: "u"

    $("#filterOpcode").trigger("change");

    $("#registerOne").val("v0");

    $("#registerTwo").val("a0");
    setRegisterVal("registerTwo", 6);

    $("#immediate").val(12);

    // look for $v0 = 18
}

/**
 * tests if add register based unsigned works accordingly
 */
function addRegisterUnsignedTest() {
    $("#filterOpcode").val("add");
    $("#filterMode").val(""); // register: "", immediate: "i"
    $("#filterSigned").val("u"); // signed: "", unsigned: "u"

    $("#filterOpcode").trigger("change");

    $("#registerOne").val("v0");

    $("#registerTwo").val("a0");
    setRegisterVal("registerTwo", 2147483647);

    $("#registerThree").val("a1");
    setRegisterVal("registerThree", 2147483647);

    // look for $v0 = -2
}

/**
 * tests if add immediate based unsigned works accordingly
 */
function addImmediateUnsignedTest() {
    $("#filterOpcode").val("add");
    $("#filterMode").val("i"); // register: "", immediate: "i"
    $("#filterSigned").val("u"); // signed: "", unsigned: "u"

    $("#filterOpcode").trigger("change");

    $("#registerOne").val("v0");

    $("#registerTwo").val("a0");
    setRegisterVal("registerTwo", 2147483647);

    $("#immediate").val(1);

    // look for $v0 = -2147483648
}

/**
 * tests if add register based throws overflow error correctly
 */
function addRegisterOverflowTest() {
    $("#filterOpcode").val("add");
    $("#filterMode").val(""); // register: "", immediate: "i"
    $("#filterSigned").val(""); // signed: "", unsigned: "u"

    $("#filterOpcode").trigger("change");

    $("#registerTwo").val("a0");
    setRegisterVal("registerTwo", 1);

    $("#registerThree").val("a1");
    setRegisterVal("registerThree", 2147483647);

    // look for alert overflow
}

/**
 * tests if add immediate based throws overflow error correctly
 */
function addImmediateOverflowTest() {
    $("#filterOpcode").val("add");
    $("#filterMode").val("i"); // register: "", immediate: "i"
    $("#filterSigned").val(""); // signed: "", unsigned: "u"

    $("#filterOpcode").trigger("change");

    $("#registerOne").val("v0");

    $("#registerTwo").val("a0");
    setRegisterVal("registerTwo", 2147483647);

    $("#immediate").val(1);

    // look for alert overflow
}

/**
 * tests if beq works accordingly
 */
function beqTest() {
    $("#filterOpcode").val("beq");

    $("#filterOpcode").trigger("change");

    $("#registerOne").val("a0");
    setRegisterVal("registerOne", 1);

    $("#registerTwo").val("a1");
    setRegisterVal("registerTwo", 1);

    $("#immediate").val(3);

    // look for pc = 7
}

/**
 * tests if beq does not advance when not equal
 */
function beqNotTest() {
    $("#filterOpcode").val("beq");

    $("#filterOpcode").trigger("change");

    $("#registerOne").val("a0");
    setRegisterVal("registerOne", 2);

    $("#registerTwo").val("a1");
    setRegisterVal("registerTwo", 1);

    $("#immediate").val(3);

    // look for pc = 4
}

/**
 * tests if bne works accordingly
 */
function bneTest() {
    $("#filterOpcode").val("bne");

    $("#filterOpcode").trigger("change");

    $("#registerOne").val("a0");
    setRegisterVal("registerOne", 1);

    $("#registerTwo").val("a1");
    setRegisterVal("registerTwo", 2);

    $("#immediate").val(3);

    // look for pc = 7
}

/**
 * tests if bne does not advance when equals
 */
function bneNotTest() {
    $("#filterOpcode").val("bne");

    $("#filterOpcode").trigger("change");

    $("#registerOne").val("a0");
    setRegisterVal("registerOne", 1);

    $("#registerTwo").val("a1");
    setRegisterVal("registerTwo", 1);

    $("#immediate").val(3);

    // look for pc = 4 
}

/**
 * tests if j works accordingly
 */
function jTest() {
    $("#filterOpcode").val("j");

    $("#filterOpcode").trigger("change");

    $("#immediate").val(3);

    // look for pc = 7
}

/**
 * tests if jr works accordingly
 */
function jrTest() {
    $("#filterOpcode").val("jr");

    $("#filterOpcode").trigger("change");

    $("#registerOne").val("a0");
    setRegisterVal("registerOne", 1);

    // look for pc = 5
}

/**
 * tests if and register based works accordingly
 */
function andRegisterTest() {
    $("#filterOpcode").val("and");
    $("#filterMode").val(""); // register: "", immediate: "i"

    $("#filterOpcode").trigger("change");

    $("#registerOne").val("v0");

    $("#registerTwo").val("a0");
    setRegisterVal("registerTwo", 5);

    $("#registerThree").val("a1");
    setRegisterVal("registerThree", 6);

    // look for $v0 = 4
}

/**
 * tests if and immediate based works accordingly
 */
function andImmediateTest() {
    $("#filterOpcode").val("and");
    $("#filterMode").val("i"); // register: "", immediate: "i"

    $("#filterOpcode").trigger("change");

    $("#registerOne").val("v0");

    $("#registerTwo").val("a0");
    setRegisterVal("registerTwo", 6);

    $("#immediate").val(12);

    // look for $v0 = 4
}

/**
 * tests if or register based works accordingly
 */
function orRegisterTest() {
    $("#filterOpcode").val("or");
    $("#filterMode").val(""); // register: "", immediate: "i"

    $("#filterOpcode").trigger("change");

    $("#registerOne").val("v0");

    $("#registerTwo").val("a0");
    setRegisterVal("registerTwo", 2);

    $("#registerThree").val("a1");
    setRegisterVal("registerThree", 3);

    // look for $v0 = 3
}

/**
 * tests if or immediate based works accordingly
 */
function orImmediateTest() {
    $("#filterOpcode").val("or");
    $("#filterMode").val("i"); // register: "", immediate: "i"

    $("#filterOpcode").trigger("change");

    $("#registerOne").val("v0");

    $("#registerTwo").val("a0");
    setRegisterVal("registerTwo", 2);

    $("#immediate").val(5);

    // look for $v0 = 7
}

/**
 * tests if store word works accordingly
 */
function storeWordTest() {
    $("#filterOpcode").val("sw");

    $("#filterOpcode").trigger("change");

    $("#registerOne").val("zero");

    $("#registerTwo").val("a0");
    setRegisterVal("registerTwo", 6);

    $("#immediate").val(0);

    // look for memory[0] = 6
}

/**
 * tests if load word works accordingly
 */
function loadWordTest() {
    $("#filterOpcode").val("lw");

    $("#filterOpcode").trigger("change");

    memory[1] = 10;
    $("#m1").html(10);

    $("#registerOne").val("a0");
    setRegisterVal("registerOne", 1);

    $("#registerTwo").val("v0");

    $("#immediate").val(0);

    // look for $v0 = 10
}

/**
 * tests if writing zero fails
 */
function zeroWriteTest() {
    $("#filterOpcode").val("add");
    $("#filterMode").val(""); // register: "", immediate: "i"
    $("#filterSigned").val(""); // signed: "", unsigned: "u"

    $("#filterOpcode").trigger("change");

    $("#registerOne").val("zero");

    $("#registerTwo").val("a0");
    setRegisterVal("registerTwo", 5);

    $("#registerThree").val("a1");
    setRegisterVal("registerThree", 6);

    // look for alert that $zero cannot be written
}