const lower: HTMLButtonElement = document.getElementById("lower") as HTMLButtonElement;
const upper: HTMLButtonElement = document.getElementById("upper") as HTMLButtonElement;
const truncate: HTMLButtonElement = document.getElementById("truncate") as HTMLButtonElement;

const text: HTMLInputElement = document.getElementById("text") as HTMLInputElement;

upper.addEventListener("click", () => {
    alert(
        text.value.toUpperCase()
    );
})

lower.addEventListener("click", () => {
    alert(
        text.value.toLowerCase()
    );
})

truncate.addEventListener("click", () => {
    alert(
        text.value.substring(0, text.value.length/2)
    );
})