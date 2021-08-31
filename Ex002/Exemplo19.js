//-------------------------If Else If-----------------------------//
let idade = 67
console.log(`Você tem ${idade} anos.`)
if(idade<16){
    console.log('Não vota')
} else if(idade <18 || idade>65){
    console.log('Voto opcional')
} else{
    console.log('Voto Obrigatório')
}
//------------------------exemplo 2-------------------------------//
let agora = new Date()
let hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora<12){
    console.log('Bom dia')
} else if(hora <=18){
    console.log('Boa tarde')
} else{
    console.log('Boa noite')
}