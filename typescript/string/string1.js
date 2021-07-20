var lower = document.getElementById("lower");
var upper = document.getElementById("upper");
var truncate = document.getElementById("truncate");
var text = document.getElementById("text");
upper.addEventListener("click", function () {
    alert(text.value.toUpperCase());
});
lower.addEventListener("click", function () {
    alert(text.value.toLowerCase());
});
truncate.addEventListener("click", function () {
    alert(text.value.substring(0, text.value.length / 2));
});