


function myFunction() {
    let text;
    let stringa = prompt("Inserisci una stringa di massimo 100 caratteri");
    if ( stringa.length > 100 && !stringa.match(/[a-z]/i)) {
      text = "La stringa inserita non è valida" ;
    } else {
        let charachter = prompt("Quale carattere vuoi contare");
      if(charachter.length != 1){
        text= "il carattere inserito non è valido"
    }else{
            let counts = 0;
            for(let i in stringa)
            charachter.includes(stringa[i])?counts++:false;

        text = 'Il carattere inserito ' + charachter +'  si ripete:' +  '\n' + counts+' volte' 
    }

} 
document.getElementById("demo").innerHTML = text;
    }

  
      
