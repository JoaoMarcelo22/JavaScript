//---------------------------DOM-------------//

//-------------------------OB-WINDOW---------//
console.log(window.innerWidth); // Mostra o tamanho atual da tela//
console.log(screen.width); // mostra a resolução do monitor//


window.scroll(0,window.innerWidth);
//-----------------------OB-DOCUMENT---------//


//------------------------OB-ELEMENT---------//
document.onscroll = function(){
    console.log('rolando');
}


//Eventos//
onclick("quando clicado")
onload("quando carregado")
onresize("quando redimencionado")
onchange("quando um elemento HTML for alterado")
onmouseover("quando passar o mouser 'por cima'do elemento")
onkeydown("quando o usuario pressionar alguma tecla do teclado")
onmouseout("quando o usuario movimentar o mouse 'para fora' do elemento")