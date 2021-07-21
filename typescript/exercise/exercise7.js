function mix() {
    let text ;
    let str = prompt();
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var splStr = str.split("");
    var rev = splStr.reverse().join("");
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
        if (splStr[i] !== splStr[len - 1 - i]) {
        text = "la frase non è palindroma"+ '\n' + rev
        document.getElementById("demo").innerHTML = text;
        return false;
    } 
  }
  let charachter = prompt("Quale carattere vuoi contare");
  if(charachter.length != 1){
    text= "il carattere inserito non è valido"
}else{
        let counts = 0;
        for(let i in str)
        charachter.includes(str[i])?counts++:false;
        text = 'Il carattere inserito ' + charachter +'  si ripete:' +  '\n' + counts+' volte e la frase è palindroma , la parola al contrario è '+  '\n'+rev 
}

  document.getElementById("demo").innerHTML = text;
  return true;
}
