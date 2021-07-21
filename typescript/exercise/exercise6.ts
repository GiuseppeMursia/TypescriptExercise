function palindroma() {
    let text : string;
    let str: any = prompt();
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          text = "la frase non è palindroma"
          return false;
      }
      text= "la frase è palindroma";
      return true;
    }
      document.getElementById("demo").innerHTML = text;
    }