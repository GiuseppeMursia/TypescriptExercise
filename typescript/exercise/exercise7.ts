function mix(){
    let text : string;
    let str: string = prompt() as string;
    text = "la frase non è palindroma"
    document.getElementById("demo").innerHTML = text
    let char = prompt("Quale carattere vuoi contare");
    text = 'Il carattere inserito ' + char +'  si ripete:' + countChar(str,char) + ' volte e la frase' + (palindroma(str) ? 'è palindroma' : 'non è palindroma' ) + ', la parola al contrario è '+  '\n'+ str.split("").reverse().join("") + '\n'+ (urlContains(str) ? 'contiene url' : 'non contiene url');
    document.getElementById("demo").innerHTML = text;
}

function palindroma(str: string): boolean{
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      } 
    }
    return true;
}

function countChar(str: string, charachter: string): number{
    if(charachter.length == 1){
        let counts = 0;
        for(var i = 0; i < str.length; i++){
           if(charachter.includes(str[i])){
               counts++;
           }
        }
        return counts;
    }else{
        return -1;
    }
}

function urlContains(stringa: string): boolean{
    return stringa.split(" ").includes("http");  
}

function wordPalindrome(str: string): boolean{
    let stringa: Array<string> = str.split(" ");
    let count: number = 0;
    for(let s in stringa){
        for (var i = 0; i < s.length/2; i++) {
            if (s[i] === s[s.length - 1 - i]) {
               count++;
            }
        }
        return count!==0;
       
    }

 }




