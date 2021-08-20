//----------------------Loops While e For----------------------//

//----- exemplo não ideal-----//

let tabuada = 7;
console.log(tabuada * 1); //exibe o resultado 7//
console.log(tabuada * 2); //exibe o resultado 14//
console.log(tabuada * 3); //exibe o resultado 21//
console.log(tabuada * 4); //exibe o resultado 28//
console.log(tabuada * 5); //exibe o resultado 35//
console.log(tabuada * 6); //exibe o resultado 42//
console.log(tabuada * 7); //exibe o resultado 49//
console.log(tabuada * 8); //exibe o resultado 56//
console.log(tabuada * 9); //exibe o resultado 63//
console.log(tabuada * 10); //exibe o resultado 70//

//------ Reptição usando o while -------//

let tabuada = 7;
let contador =1;

while (contador<=10){
    console.log(
        tabuada,"X", contador, "=", tabuada * contador++
    );
}

//------Reptição usando o For ----------//
let tabuada = 7;

for(let contador= 1; contador<=10; contador++){
    console.log(
        tabuada,"x", contador, "=", tabuada * contador
    );
}
// na reptição For, somos obrigados a informar o incremento, assim  não permitando loop infinitos//