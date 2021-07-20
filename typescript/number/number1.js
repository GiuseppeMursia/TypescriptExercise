console.log('Esercizi aritmetici');
console.log('In questa pagina vengono eseguiti semplici operazioni aritmetiche');
var one = document.getElementById('one');
var two = document.getElementById('two');
var evConsole = document.getElementById('evConsole');
var evAlert = document.getElementById('evAlert');
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
evConsole.addEventListener("click", function () {
    console.log('I valori immessi sono ' + one.value + ' e ' + two.value);
    console.log('Addizione: ', add(+one.value, +two.value));
    console.log('Sottrazione: ', sub(+one.value, +two.value));
    console.log('Moltiplicazione: ', mul(+one.value, +two.value));
    console.log('Divisione: ', div(+one.value, +two.value));
});
evAlert.addEventListener("click", function () {
    alert('I valori immessi sono ' + one.value + ' e ' + two.value + '\n' +
        'Addizione: ' + add(+one.value, +two.value) + '\n' +
        'Sottrazione: ' + sub(+one.value, +two.value) + '\n' +
        'Moltiplicazione: ' + mul(+one.value, +two.value) + '\n' +
        'Divisione: ' + div(+one.value, +two.value));
});