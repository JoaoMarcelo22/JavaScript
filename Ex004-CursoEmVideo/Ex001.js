let a= document.getElementById('area')
a.addEventListener('click',clicar)
a.addEventListener('mouseenter',entrar)
a.addEventListener('mouseout',sair)

function clicar(){
    a.innerText='Clicou'
    a.style.backgroundColor='red'
}
function clicar(){
    a.innerText='Entrou'
}
function clicar(){
    a.innerText='Saiu'
    a.style.backgroundColor='green'
}