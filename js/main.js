/**
 * Abraham Lee, Tammy Vo, Jonathan Kim
 * TCSS 472
 * Project 1
 */

 // program counter that is incremented by 4 everytime instruction is executed
var pc = 0;

// register id names to set and receive values from
var registers =
    [
        "zero", "v0", "v1", "a0", "a1", "a2", "a3",
        "t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7",
        "s0", "s1", "s2", "s3", "s4", "s5", "s6", "s7",
        "t8", "t9", "k0", "k1", "gp", "sp", "fp", "ra"
    ];

var memory = [];    // array of memories to store and load from
var memLength = 20; // feel free to set however many as you like

/**
 * Main function that loads all the components of the MIPS simulator
 */
$(document).ready(function () {
    for (var i = 0; i < memLength; i++) {
        memory[i] = 0;
        var div = document.createElement("div");
        div.innerHTML = "0";
        div.setAttribute("id", "m" + i);
        $("#memory").append(div);
    }

    for (var i = 0; i < registers.length; i++) {

        // set registers
        var row = document.createElement("tr");
        var th = document.createElement("th");
        th.innerHTML = "$" + registers[i];
        row.appendChild(th);
        var td = document.createElement("td");
        var reg = document.createElement("input");
        reg.setAttribute("type", "number");
        reg.setAttribute("value", 0);
        reg.setAttribute("id", registers[i]);
        td.appendChild(reg);
        row.appendChild(td);
        $("#registers").append(row);

        // set inputs
        var option = document.createElement("option");
        option.value = registers[i];
        option.innerHTML = "$" + registers[i];
        $("#registerOne").append(option);
        $("#registerTwo").append(option.cloneNode(true));
        $("#registerThree").append(option.cloneNode(true));
    }

    $("#fierihelp").on("mouseenter", function (event) {
        // $(this).addClass("gray");
        var div = document.createElement("div");
        div.id = "chart";
        div.style.border = "thick solid black";
        div.style.backgroundColor = "white";
        var img = document.createElement("img");
        var caption = document.createElement("p");
        caption.style.textAlign = "center";
        img.src = "images/chart.png";
        img.alt = "Chart";
        img.style.width = "500px";
        caption.innerHTML = "Here is the following format to follow!";
        div.append(img);
        div.append(caption);
        div.style.position = "absolute";
        div.style.top = event.pageY + 20 + "px";
        div.style.left = event.pageX + 20 + "px";
        $("body").append(div);
        $("#chart").fadeIn(1000);

    });

    $("#fierihelp").on("click", function (event) {
        var audio = new Audio('sounds/flavortown.mp3');
        audio.play();
    });

    $("#fierihelp").on("mousemove", function(event) {
        $("#chart").css("top", event.pageY + 20 + "px");
        $("#chart").css("left", event.pageX + 20 + "px");
    });

    $("#fierihelp").on("mouseleave", function () {
        // $(this).removeClass("gray");
        $("#chart").remove();
    });

    $("#filterOpcode").change(setArguments);    // listens for changes on opcode
    $("#filterMode").change(setArguments);      // listens for changes on mode
    $("#execute").click(chooseOperation);      // once execute button is clicked, do instruction
});

/**
 * Parses Opcode and calls its corresponding function
 * Increments PC + 4 as well
 */
function chooseOperation() {
    var opcode = $("#filterOpcode").val();
    var func = new Function(opcode + "();");
    incrementPc(4);
    printOperation();
    func();
}

/**
 * Increments current PC by whatever offset
 * @param {PC offset} offset 
 */
function incrementPc(offset) {
    pc += offset;
    $("#pc").html(pc);
}

function printOperation() {
    var toPrint = "";
    toPrint += $("#filterOpcode").val();
    var mode = $("#filterMode");
    if (mode.attr("disabled") == null) {
        toPrint += mode.val();
    }
    
    var sign = $("#filterSigned");
    if (sign.attr("disabled") == null) {
        toPrint += sign.val();
    }
    toPrint += " $" + $("#registerOne").val();
    var r2 = $("#registerTwo");
    if (r2.parent().css("display") == "table-cell") {
        toPrint += ", $" + r2.val();
    }
    var r3 = $("#registerThree");
    if (r3.parent().css("display") == "table-cell") {
        toPrint += ", $" + r3.val();
    }
    var imm = $("#immediate");
    if (imm.parent().css("display") == "table-cell") {
        toPrint += ", " + imm.val();
    }
    $("textarea").text($("textarea").text() + toPrint + "\n");
}

/**
 * Sets inputs of corresponding opcodes and modes
 */
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
        $("#immediate").parent().css("display", "table-cell");
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