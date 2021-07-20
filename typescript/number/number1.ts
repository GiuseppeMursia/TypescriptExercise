console.log('Esercizi aritmetici')
console.log('In questa pagina vengono eseguiti semplici operazioni aritmetiche')

const one: HTMLInputElement = document.getElementById('one') as HTMLInputElement;
const two: HTMLInputElement = document.getElementById('two') as HTMLInputElement;

const evConsole = document.getElementById('evConsole');
const evAlert = document.getElementById('evAlert');


function add(a: number, b: number): number {
    return a+b;
}

function sub(a: number, b: number): number {
    return a-b;
}

function mul(a: number, b: number): number {
    return a*b;
}

// Nessun controllo sul dividendo
function div(a: number, b: number): number {
    return a/b;
}

evConsole.addEventListener("click", () => {
    console.log('I valori immessi sono ' + one.value + ' e ' + two.value);
    // Il + serve a valutare il valore come number
    console.log('Addizione: ', add(+one.value, +two.value));
    console.log('Sottrazione: ', sub(+one.value, +two.value));
    console.log('Moltiplicazione: ', mul(+one.value, +two.value));
    console.log('Divisione: ', div(+one.value, +two.value));
})

evAlert.addEventListener("click", () => {
    alert(
        'I valori immessi sono ' + one.value + ' e ' + two.value + '\n' +
        'Addizione: ' + add(+one.value, +two.value) + '\n' +
        'Sottrazione: ' + sub(+one.value, +two.value) + '\n' +
        'Moltiplicazione: ' + mul(+one.value, +two.value) + '\n' +
        'Divisione: ' + div(+one.value, +two.value)
    )
})
