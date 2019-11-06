/**
 * Abraham Lee, Tammy Vo, Jonathan Kim
 * TCSS 472
 * Project 1
 */

var pc = 0;

var registers =
    [
        "$zero", "$v0", "$v1", "$a0", "$a1", "$a2", "$a3",
        "$t0", "$t1", "$t2", "$t3", "$t4", "$t5", "$t6", "$t7",
        "$s0", "$s1", "$s2", "$s3", "$s4", "$s5", "$s6", "$s7",
        "$t8", "$t9", "$k0", "$k1", "$gp", "$sp", "$fp", "$ra"
    ];

// var memory = new int[100];

$(document).ready(function () {

    for (var i = 0; i < registers.length; i++) {
        var row = document.createElement("tr");
        var th = document.createElement("th");
        th.innerHTML = registers[i];
        row.appendChild(th);
        var td = document.createElement("td");
        td.innerHTML = "0";
        td.setAttribute("id", registers[i]);
        row.appendChild(td);
        $("#registers").append(row);

        var option = document.createElement("option");
        option.value = registers[i];
        option.innerHTML = registers[i];
        $("#registerOne").append(option);
        $("#registerTwo").append(option.cloneNode(true));
        $("#registerThree").append(option.cloneNode(true));
    }
    $("#filterOpcode").change(setArguments);
    $("#filterMode").change(setArguments);
});

function setArguments() {
    var opcode = $("#filterOpcode").val();
    var mode = $("#filterMode").val();

    if (opcode == "add" || opcode == "or" || opcode == "and") {
        $("#registerOne").parent().css("display", "table-cell");
        $("#registerTwo").parent().css("display", "table-cell");
        $("#filterMode").removeAttr("disabled");
        $("#filterMode").css("color", "black");
        if (opcode == "add") {
            $("#filterSigned").removeAttr("disabled");
            $("#filterSigned").css("color", "black");
        } else {
            $("#filterSigned").attr("disabled", "true");
            $("#filterSigned").css("color", "grey");
            
        }
        if (mode == "i") {
            $("#immediate").parent().css("display", "table-cell");
            $("#registerThree").parent().css("display", "none");
        } else {
            $("#immediate").parent().css("display", "none");
            $("#registerThree").parent().css("display", "table-cell");
        }
    } else if (opcode == "lw" || opcode == "sw" || opcode == "beq" || opcode == "bne") {
        $("#filterMode").attr("disabled", "true");
        $("#filterSigned").attr("disabled", "true");
        $("#filterMode").css("color", "grey");
        $("#filterSigned").css("color", "grey");
        $("#registerOne").parent().css("display", "table-cell");
        $("#registerTwo").parent().css("display", "table-cell");
        $("#immediate").parent().css("display", "none");
        $("#registerThree").parent().css("display", "none");
    } else {
        $("#filterMode").attr("disabled", "true");
        $("#filterSigned").attr("disabled", "true");
        $("#filterMode").css("color", "grey");
        $("#filterSigned").css("color", "grey");
        $("#registerTwo").parent().css("display", "none");
        $("#registerThree").parent().css("display", "none");
        if (opcode == "j") {
            $("#immediate").parent().css("display", "table-cell");
            $("#registerOne").parent().css("display", "none");
        } else {
            $("#immediate").parent().css("display", "none");
            $("#registerOne").parent().css("display", "table-cell");
        }

    }
}
