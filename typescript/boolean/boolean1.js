var x = document.getElementById("x");
var y = document.getElementById("y");
function not(a) {
    return !a;
}
function and(a, b) {
    return a && b;
}
function or(a, b) {
    return a || b;
}
function nand(a, b) {
    return !(a && b);
}
function nor(a, b) {
    return !(a || b);
}
function evalBool(r) {
    return (r == true ? "1" : "0");
}
function calc(value) {
    var xVal = (value === "true" ? true : false);
    document.getElementById("notx").innerHTML = evalBool(not(xVal));
}
x.addEventListener("click", function () {
    var xVal = (x.value === "1" ? true : false);
    document.getElementById("notx").innerHTML = evalBool(not(xVal));
    var yVal = (y.value === "1" ? true : false);
    document.getElementById("and").innerHTML = evalBool(and(xVal, yVal));
    document.getElementById("or").innerHTML = evalBool(or(xVal, yVal));
    document.getElementById("nand").innerHTML = evalBool(nand(xVal, yVal));
    document.getElementById("nor").innerHTML = evalBool(nor(xVal, yVal));
});
y.addEventListener("click", function () {
    var yVal = (y.value === "1" ? true : false);
    document.getElementById("noty").innerHTML = evalBool(not(yVal));
    var xVal = (x.value === "1" ? true : false);
    document.getElementById("and").innerHTML = evalBool(and(yVal, xVal));
    document.getElementById("or").innerHTML = evalBool(or(yVal, xVal));
    document.getElementById("nand").innerHTML = evalBool(nand(yVal, xVal));
    document.getElementById("nor").innerHTML = evalBool(nor(yVal, xVal));
});