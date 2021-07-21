
function myFunction() {
    let text : string;
    let stringa: any = prompt();
    if ( stringa.length > 100 || !stringa.match(/[a-z]/i)) {
      text = "La stringa inserita non è valida" ;
    } else {
        let charachter: string = prompt("Quale carattere vuoi contare");
      if(charachter.length != 1 && !charachter.match(/[a-z]/i)){
        text= "il carattere inserito non è valido"
    }else{
            let counts: number = 0;
            for(let i in stringa)
            charachter.includes(stringa[i])?counts++:false;

        text = 'Il carattere inserito ' + charachter +'  si ripete:' +  '\n' + counts+' volte' 
    }

} 
document.getElementById("demo").innerHTML = text;
    }

  