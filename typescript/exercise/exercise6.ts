function palindroma() {
    let text : string;
    let str: any = prompt();
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
             text = "la frase non è palindroma"
          document.getElementById("demo").innerHTML = text;
          return false;
      }
    }
    let charachter = prompt("Quale carattere vuoi contare");
    
    text= "la frase è palindroma";
    document.getElementById("demo").innerHTML = text;
    return true;
}
