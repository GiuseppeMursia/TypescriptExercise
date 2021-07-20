const x:HTMLInputElement = document.getElementById("x") as HTMLInputElement;
const y:HTMLInputElement = document.getElementById("y") as HTMLInputElement;

function not(a: boolean): boolean {
    return !a;
}

function and(a: boolean, b: boolean): boolean {
    return a && b;
}

function or(a: boolean, b: boolean): boolean {
    return a || b;
}

function nand(a: boolean, b: boolean): boolean {
    return !(a && b);
}

function nor(a: boolean, b: boolean): boolean {
    return !(a || b);
}

function evalBool(r: boolean): string {
    return (r == true ? "1" : "0");
}

function calc(value: string) {
    var xVal: boolean = (value === "true" ? true : false);
    document.getElementById("notx").innerHTML = evalBool(not(xVal))
}

x.addEventListener("click", () => {
    let xVal: boolean = (x.value === "1" ? true : false);
    document.getElementById("notx").innerHTML = evalBool(not(xVal))

    let yVal: boolean = (y.value === "1" ? true : false);
    document.getElementById("and").innerHTML = evalBool(and(xVal, yVal));
    document.getElementById("or").innerHTML = evalBool(or(xVal, yVal));
    document.getElementById("nand").innerHTML = evalBool(nand(xVal, yVal));
    document.getElementById("nor").innerHTML = evalBool(nor(xVal, yVal));

})

y.addEventListener("click", () => {
    let yVal: boolean = (y.value === "1" ? true : false);
    document.getElementById("noty").innerHTML = evalBool(not(yVal));

    let xVal: boolean = (x.value === "1" ? true : false);
    document.getElementById("and").innerHTML = evalBool(and(yVal, xVal));
    document.getElementById("or").innerHTML = evalBool(or(yVal, xVal));
    document.getElementById("nand").innerHTML = evalBool(nand(yVal, xVal));
    document.getElementById("nor").innerHTML = evalBool(nor(yVal, xVal));
})