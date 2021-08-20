//------------------------Array---------------------------//

//-----------------Seleção-------------------------------//
let frutas =["Maçã","Banana","Uva"];
console.log(frutas);
//exibição no consose:Todas os itens ["maça", "Banana", "Uva"]
//frutas--maçã--banana--uva//
//indice--  0 --  1 --   2//

let frutas = ["maça","Banana","uva"];
console.log(frutas[0]);
//exibição no console:Apenas o item 0 = maça//

//-----------------Edição------------------------------//
let frutas = ["A","B"];
console.log(frutas);

frutas[1] ="modifi"; // modificar item já existente, 1 era = B//
console.log(frutas);

frutas[1] ="B";

frutas[6]= "D";
console.log(frutas); // adicionar item em um local não existente e fora do Next das opções//
// entre o iten 1 e 6 foi exibido a mensagem (<2 empty items>) informando que as posições 2,3,4,5 estão vazias.//

//-----------------Adicionar----------------------------//
let pessoas =[];
pessoas.push("José","Ana","Maicon","Diego");

console.log(pessoas);
//exibição no console: ["Jose", "ana","Maicon","Diego"]

//------------------Remoção----------------------------//
let pessoas =[];
pessoas.push("José","Ana","Maicon","Diego");
pessoas.pop(); // remove o ultimo elemento da array//
pessoas.splice(1,1);// remove um elemento especifico//
pessoas.shift(); // remove o primeiro elemento da array//


console.log(pessoas);
//exibição 1 no console: ["Jose", "ana","Maicon"]
//exibição 2 no console: ["Jose", "Maicon"]
//exibição 3 no console: ["Maicon"]

