let massa = 200
let altura = 1.66
let imc = massa /(altura^2)
console.log(" IMC :" + imc)
if(imc<17){
    console.log("Muito abaixo do peso")
}
else if (imc>=17 & imc<18.5){
    console.log("Abaixo do peso")
}
else if(imc>=18.5 & imc<25){
    console.log("Peso ideal")
}
else if(imc>= 25 & imc<30){
    console.log("Sobrepeso")
}
else if(imc>=30 & imc <35){
    console.log("Obesidade")
}
else if (imc>=35 || imc<36 ){
    console.log("Obesidade Morbida")
}