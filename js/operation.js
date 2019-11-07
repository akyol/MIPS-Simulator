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
    //pc++;
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
    var mode = $("#filterMode").val();
    var src1 = getRegisterVal("registerTwo");
    var src2;
    if (mode == "i") {
        src2 = parseInt($("#immediate").val());
    } else {
        src2 = getRegisterVal("registerThree");
    }
    var result = src1 || src2;
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
    var result = src1 && src2;
    setRegisterVal("registerOne", result);
}

function lw() {
    var src1 = getRegisterVal("registerTwo");
    var result = memory[src1 + offset];
    setRegisterVal("registerOne", result);
}

function sw() {
    var src1 = getRegisterVal("registerOne");
    var src2 = getRegisterVal("registerTwo");
    memory[src1 + offset] = src1;
    setRegisterVal("registerOne", result);
}

function beq() {
    var src1 = getRegisterVal("registerOne");
    var src2 = getRegisterVal("registerTwo");
    var label = getRegisterVal("registerThree");
    if(src1 == src2){
        
    }
}

function bne() {

}

function j() {

}

function jr() {

}