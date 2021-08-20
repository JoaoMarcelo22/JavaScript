1 && 2; //simbulo "AND"//
1 || 2; //simbulo "OR"//
 //.. ! ..simbulo de "NOT"//

 let escolha = 23; //escolha do usuario//
 console.log(escolha >= 10 && escolha <=20); // exibe False no console//
 escolha = 17;// outra escolha
 console.log(escolha >= 10 && escolha <=20); //exibe True no console//

 //--------------------AND------------------------------------------//

 let escolha = 23; // escolha do usuario//
 console.log(escolha < 10 || escolha >20); // exibe True no console//
 escolha = 17; // outra escolha//
 console.log(escolha < 10 || escolha >20); // exibe False no console//
 
 //--------------------OR------------------------------------------//

 let usuarioLogado = false;
 console.log(!usuarioLogado); // exibe True no console//

 let escolha = 5;
 console.log(!(escolha < 10)); // exibe False no console//

 //--------------------NOT------------------------------------------//