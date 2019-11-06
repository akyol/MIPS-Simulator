/**
 * Abraham Lee, Tammy Vo, Jonathan Kim
 * TCSS 472
 * Project 1
 */

var pc = 0;

var registers;

var memory = new int[100];

$(document).ready(function() {
    $(".operation").on("click", startOperation);
});
