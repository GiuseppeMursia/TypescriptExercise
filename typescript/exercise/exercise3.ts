var arr:number[] = [0,1,2,3,4,5,6,7,8,9];

// 1) Lunghezza
console.log(arr.length);

// 2) Indice 0
console.log(arr[0]);

// 3) Indice 10
console.log(arr[arr.length-1]);

// 4) Metà
console.log(arr[arr.length/2]);

// 5) Stringa
console.log(arr.join(","));

// 6) Aggiunta elemento
arr.push(arr.length);
console.log(arr);

// 7) Stringa aggiornata
console.log(arr.join(""));

// 8) Stringa reversed
console.log(arr.reverse().join(" : "));