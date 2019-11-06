/**
 * Abraham Lee, Tammy Vo, Jonathan Kim
 * TCSS 472
 * Project 1
 */

/**
 * Operations that are executed for MIPS simulator
 */


var maxVal = 2147483647;
var minVal = -2147483648;

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
    var newVal = getRegisterVal(reg) + parseInt(val);
    $("#" + $("#" + reg).val()).val(newVal);
}

/**
 * When called, increments PC + 4
 */
function jumpPC() {
     
}

/**
 * Function that does the ADD, ADDI, ADDU, and ADDIU instruction
 */
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
    if (signed == "u") {
        result = result % maxVal;
        setRegisterVal("registerOne", result);
    } else if (result <= maxVal && result >= minVal) {
        setRegisterVal("registerOne", result);
    } else {
        alert("overflow error");
    }
}

/**
 * Function that does the OR and ORI instruction
 */
function or() {

}

/**
 * Function that does AND and ANDI instruction
 */
function and() {

}

function lw() {

}

function sw() {

}

function beq() {

}

function bne() {

}

function j() {

}

function jr() {

}