let imagem1 = window.document.getElementById('mariaimagem')
let imagemVolta = window.document.getElementById('mariaimagem')
imagem1.addEventListener('mouseenter', entrar)
imagem1.addEventListener('mouseout', sair)
function entrar(){
    imagem1.innerHTML = 'minhaaaa <br> <strong>trouxonaa</strong>'
    
}
function sair() {
    
    
    imagem1.src = 'img/meu_amor.png'
    imagem1.src = load(window. location. href + "mariaimagem" )
}
let imagem2 = window.document.getElementById('leviimagem')
let imagemVolta2 = window.document.getElementById('leviimagem')
imagem2.addEventListener('mouseenter', entrar1)
imagem2.addEventListener('mouseout', sair1)

function entrar1(){
    imagem2.innerHTML = 'Seu <br> <strong>trouxããão</strong>'
    
}
function sair1() {
    imagem2.innerHTML = 'Não sei volta <br> pra foto'
}
