/**
 * Abraham Lee, Tammy Vo, Jonathan Kim
 * TCSS 472
 * Project 1
 */

/**
 * Operations that are executed for MIPS simulator
 */

// Maximum and minimum values for 32 bit signed
var maxVal = 2147483647;
var minVal = -2147483648;
var signVal = 4294967296;

/**
 * Helper function to return value of named register
 * @param {Register Name} reg 
 */
function getRegisterVal(reg) {
    return parseInt($("#" + $("#" + reg).val()).val());
}
/**
 * Helper function to set value of named register
 * @param {Register Name} reg 
 * @param {Value to set for register} val 
 */
function setRegisterVal(reg, val) {
    $("#" + $("#" + reg).val()).val(parseInt(val));
}

function add() {
    var mode = $("#filterMode").val();
    var signed = $("#filterSigned").val();
    var src1 = getRegisterVal("registerTwo");
    var src2;
    if (mode == "i") {
        src2 = parseInt($("#immediate").val());
    } else {
        src2 = getRegisterVal("registerThree");
    }
    var result = src1 + src2;
    if (result <= maxVal && result >= minVal) {
        setRegisterVal("registerOne", result);
    } else if (signed == "u") {
        var compare = result + signVal;
        compare = compare % signVal;
        compare = compare - signVal;
        result = compare;
        setRegisterVal("registerOne", result);
    } else {
        alert("overflow error");
    }  
}

/**
 * Function that does the OR and ORI instruction
 */
function or() {
    var mode = $("#filterMode").val();
    var src1 = getRegisterVal("registerTwo");
    var src2;
    if (mode == "i") {
        src2 = parseInt($("#immediate").val());
    } else {
        src2 = getRegisterVal("registerThree");
    }
    var result = src1 | src2;
    setRegisterVal("registerOne", result);
}

/**
 * Function that does AND and ANDI instruction
 */
function and() {
    var mode = $("#filterMode").val();
    var src1 = getRegisterVal("registerTwo");
    var src2;
    if (mode == "i") {
        src2 = parseInt($("#immediate").val());
    } else {
        src2 = getRegisterVal("registerThree");
    }
    var result = src1 & src2;
    setRegisterVal("registerOne", result);
}

// TODO:
function lw() {
    var src1 = getRegisterVal("registerOne");
    var src2 = getRegisterVal("registerTwo");
    var offset = parseInt($("#immediate").val());
    src2 = memory[src1 + offset];
    setRegisterVal("registerTwo", src2);

}

function sw() {
    var src1 = getRegisterVal("registerOne");
    var src2 = getRegisterVal("registerTwo");
    var offset = parseInt($("#immediate").val());
    var loc = src1 + offset;
    memory[loc] = src2;
    $("#m" + loc).html(src2);
}

// TODO:
function beq() {
    var src1 = getRegisterVal("registerOne");
    var src2 = getRegisterVal("registerTwo");
    var offset = parseInt($("#immediate").val());
    if (src1 == src2) {
        incrementPc(offset);
    }
}

// TODO:
function bne() {
    var src1 = getRegisterVal("registerOne");
    var src2 = getRegisterVal("registerTwo");
    var offset = parseInt($("#immediate").val());
    if (src1 != src2) {
        incrementPc(offset);
    }
}

// TODO:
function j() {
    var offset = parseInt($("#immediate").val());
    incrementPc(offset);
}

// TODO: 
function jr() {
    src1 = getRegisterVal("registerOne");
    incrementPc(src1);
}