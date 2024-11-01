const valor = document.getElementById('n')
const adicionar = document.getElementById('adicionar')
const lista = document.getElementById('a')

adicionar.addEventListener('click',adicionarTarefa)


function adicionarTarefa(){

    const teste = valor.value
    const aviso = document.getElementById('aviso')

    if(teste !==""){
        
        var nova_tarefa = document.createElement('li')
        nova_tarefa.innerHTML=`${teste} 
        <button class="excluir">Excluir</button>
        <button class="feito">Feito</button>
        <button class="nFeito">Não Feito</button>`

        nova_tarefa.style.fontSize="30px"
        lista.appendChild(nova_tarefa)
        localStorage.setItem('teste',lista)
        console.log(nova_tarefa)
        valor.value=""

        aviso.innerHTML=''
        
    }else{
        
        aviso.innerHTML='O campo não foi preenchido!'
        aviso.style.color='red'
        
    }
}

lista.addEventListener('click',function(e){
    if(e.target.classList.contains('excluir')){
        e.target.parentElement.remove()
    }
    else if(e.target.classList.contains('feito')){
        e.target.parentElement.style.color='green'
    }
    else if(e.target.classList.contains('nFeito')){
        e.target.parentElement.style.color='red'
    }
})

