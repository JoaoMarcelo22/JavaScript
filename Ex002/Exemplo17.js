//---------------toUppercase--------toLowerCase---------------------//
let nome ="Michael jackson";
let email ="MichaelJackson@GMAIL.com";

console.log(nome.toUpperCase());
//exibe no console : MICHAEL JACKSON
console.log(email.toLowerCase());
//exibe no console: michaeljackson@gmail.com

//-------------length-----------------------//
let senha ="123"; //minimo de 8 caractere

if(senha.length<8){
    console.log("A senha deve ter pelo menos 8 caracteres!");
    console.log("A senha informada tem apenas ", cenha.length," caracteres.");
}
// retorna o tamanho ou quantidade de caracteres da string//

//------------------split----------------------------//

let nomes ="Pedro, Amanda, José, Antônia";

console.log(nomes.split(','));
// exibe no console : ["Pedro, Amanda, José, Antônia"]//

let letra =" Era um garptp, que como eu, ama os Beatles e os Rolling Stones";
console.log(letra.split(' '));
//exibe no console : ["Era", "um", "garoto","que","como","eu"....]
//divisão de uma string