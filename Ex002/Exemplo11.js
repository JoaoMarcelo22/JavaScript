let usuario1 ="Ana";
let senhaDoUsuario1 = "recodePro";

if(usuario1 == "Ana" && senhaDoUsuario1 == "recodePro") {
    console.log("Usúarío autenticado com sucesso!");
}
//exibição no console : Usúarío autenticado com sucesso!//

else {
    console.log("Usúario e/ou senha inválidos.")
//exibição no console : Usúario e/ou senha inválidos.//
}

//If == Se --- Else == Senão//

//         if(condição){
           //bloco do if
//         }else{
           //bloco do else,opcional
//         }
//------------------------Exemplo 2--------------------------//

let usuario1 = "Ana";
let emailUsuario1 = "ana@recode.org.br";
let senhaDoUsuario1 = "recodePro";

if(usuario1 == "Ana" && senhaDoUsuario1 == "recodePro"){
    console.log("Usuario autenticado com sucesso!");
}
else if (emailUsuario1 =="ana@recode.org.br" && senhaDoUsuario1 == "recodePro"){
    console.log("Usuario autenticado com sucesso!");
}
else{
    console.log("usuario e/ou senha invalidos.");
}