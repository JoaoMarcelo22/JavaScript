//--------------------------------Função-------//
function imprimeHoraFormatada(){
    let data = new Date();
    
    let hora =data.getHours();
    let min =data.getMinutes();
    let seg =data.getSeconds();

    let hora_formatada = hora + ':' + min + ':' + seg ;
    console.log(hora_formatada);
}

imprimeHoraFormatada();
//------------------------------Refatoração----//
function logComHora(textoEntrada){
    let data = new Date();
    
    let hora =data.getHours();
    let min =data.getMinutes();
    let seg =data.getSeconds();

    let hora_formatada = hora + ':' + min + ':' + seg ;
    console.log(hora_formatada,":",textoEntrada); // exibe a hora e o parâmetro "textoEntrada"//
}
// outras linhas de codigo//
logComHora("Um texto qualquer");

//mais linhas de códego
logComHora("outro texto qualquer");


//-------------------------------Retorno-------//
function formatarMensagem(textoEntrada){
    if(textoEntrada == undefined)
        return'...';

    let data = new Date();
    
    let hora =data.getHours();
    let min =data.getMinutes();
    let seg =data.getSeconds();

    let msg_formatada = hora + ':' + min + ':' + seg +':' + textoEntrada;

    return msg_formatada; // retorna o texto de entrada formatado com a hora//
}
// outras linhas de codigo//
console.log(formatarMensagem("Um texto qualquer"));

//mais linhas de código
console.log(formatarMensagem());

//mais linhas de codigo//
console.log(formatarMensagem("outro texto qualquer"));

//-------------------------------------------------Função anonima ------//
var formatarMensagem = function(textoEntrada){
    if(textoEntrada == undefined)
        return'...';

    let data = new Date();
    
    let hora =data.getHours();
    let min =data.getMinutes();
    let seg =data.getSeconds();

    let msg_formatada = hora + ':' + min + ':' + seg +':' + textoEntrada;

    return msg_formatada; // retorna o texto de entrada formatado com a hora//
}
// outras linhas de codigo//
console.log(formatarMensagem("Um texto qualquer"));

//mais linhas de código
console.log(formatarMensagem());

//mais linhas de codigo//
console.log(formatarMensagem("outro texto qualquer"));

//-----------------------------------Arrow Functions----------//

let umaFuncao = ( variavel_entrada ) => {

    let variavel_saida;

    //códigos do bloco da função

    return variavel_saida;

}
let umoFuncao = () => {

    let variavel_saida;

    //códigos do bloco da função

    return variavel_saida;

}
let quadrado = (num) => {

    return num * num;

}

//--------------------OU

let quadrado = (num) => num * num;