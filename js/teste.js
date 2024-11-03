const listaItens=[]
const valor = document.querySelector("#texto")
const adicionar = document.querySelector("#add")
const lista = document.querySelector("#lista")
const sair = document.querySelector('#sair')
const salvando = document.querySelector('#salvar')
var contador = 0

function salvar(){
    const retorno = localStorage.getItem('listaItens')

    if(retorno){
        const separar = retorno.split(',')
        
        for(i=0;i<separar.length;i++){
           lista.innerHTML+=separar[i]
        }
        
        listaItens.push(retorno)
    }
}

sair.addEventListener('click',()=>{
    localStorage.removeItem('listaItens')
})

salvando.addEventListener('click',()=>{
    localStorage.setItem('listaItens',listaItens)
})

adicionar.addEventListener('click',()=>{
    contador ++
    const textoInput = valor.value
    const linha = document.createElement('li')

    linha.innerHTML=`<li id ="${contador}">${textoInput}
    <button class="excluir">Excluir</button>
    <button class="feito">Feito</button>
    <button class="nfeito">Não Feito</button></li>`
    lista.appendChild(linha)

    listaItens.push(`<li id ="${contador}">${textoInput}
    <button class="excluir">Excluir</button>
    <button class="feito">Feito</button>
    <button class="nfeito">Não Feito</button></li>`)

    valor.value=""
})

lista.addEventListener('click',(e)=>{
    if(e.target.classList.contains('excluir')){
        e.target.parentElement.remove()
    }else if(e.target.classList.contains('feito')){
        e.target.parentElement.style.color='green'
    }else{
         e.target.parentElement.style.color='red'}        
})


salvar()