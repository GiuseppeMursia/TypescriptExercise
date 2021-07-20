function pow(base: number, exp: number): number {
    return base ** exp;
}

function alertPow() {
    const base: number = +(document.getElementById("base") as HTMLInputElement).value;
    const exp: number = +(document.getElementById("exp") as HTMLInputElement).value;

    alert(
        base + "^" + exp + "=" + pow(base, exp)
    );
}