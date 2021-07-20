function pow(base, exp) {
    return Math.pow(base, exp);
}
function alertPow() {
    var base = +document.getElementById("base").value;
    var exp = +document.getElementById("exp").value;
    alert(base + "^" + exp + "=" + pow(base, exp));
}