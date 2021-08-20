//----------------------------Switch------------------------//

let opcao =2;
switch (opcao){
    case 1:
        console.log("Primeira opção");
        break;
    case 2:
        console.log("Segunda opção");
        break;
    case 3:
        console.log("Terceira opção");
        break;
    default:
        //caso a entrada não seja nenhuma das anteriores//
        console.log("Opção padrão")
}

// Switch() significa "desvio", é a abertura da estrutura e recebe a entrada da variavel que será comparada//

// Case significa "caso" é o espaço onde incluímos cada opção de respota, que será executada "caso" seja igual ao seu valor de entrada. O case define o ponto de entra, seguindo sua execução linha-a-linha até o fim, ou até ser iterrompida(Break)//

// Break significa "interrompimento", comando necessário ao final de cada bloco de linhas da opção case.O break deve ficar entre o inicio do case e seu término, criando uma estrutura de blocos e definindo  um ponto de saída, se nçao informado, todas as demais linhas do Switch serão executadas.//

//Default  significa""Padrão", é o bloco de código que será executado caso nenhuma opção existe seja a correta.//

//-------------------------Exemplo 2-------------------------//
let mes = 4;
switch(mes){
    case 1:
    case 2:
    case 3:
        console.log("Primeiro trimestre");
        break;
    
    case 4: //ponto de entrada, executa as linhas a partir daqui//
    case 5:
    case 6:
        console.log("Segundo trimestre");
        break;
    
    case 7:
    case 8:
    case 9:
        console.log("Terceiro Trimestre");
        break;

    case 10:
    case 11:
    case 12:
        console.log("Quarto trimestre");
        break;
    
    default:
        console.log("Mês inválido!!");
    
}
