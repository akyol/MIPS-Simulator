/**
 * Parses Opcode and calls its corresponding function
 * Increments PC + 4 as well
 */

// next test to do
var testCount = 0;

// tests to do
var tests = [addRegisterTest, addImmediateTest];

// when next button is clicked load next arguments
$(window).on('load', function () {
    $("#next").on("click", function (event) {
        if (testCount < tests.length) {
            resetArguments();
            tests[testCount++]();
        } else {
            resetArguments();
            $("textarea").text("Tests Finished");
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

