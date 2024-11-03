const listElement = document.querySelector('ul')
const inputElement = document.getElementById('tarefas')
const buttonElement = document.querySelector('#btn-add')

const tarefas = JSON.parse(localStorage.getItem('list_tarefas')) || []

function mostrando(){
    listElement.innerHTML=''    

    for(item of tarefas){
        const itemList = document.createElement('li')
        const itemText = document.createTextNode(item)

        itemList.setAttribute('class','item')

        const linkElement = document.createElement('button')
        linkElement.setAttribute('class','icons')
        
        const linkText = document.createTextNode('Excluir')
        linkElement.appendChild(linkText)
        
        const pos = tarefas.indexOf(item)
        linkElement.setAttribute('onclick', `removeTarefa(${pos})`)

        itemList.appendChild(itemText)
        itemList.appendChild(linkElement)

        listElement.appendChild(itemList)
    }    
}

mostrando()

function addTarefa(){
    const tarefa = inputElement.value

    tarefas.push(tarefa)

    inputElement.value = ''
    mostrando()
    salvarNoLocalStorage()
}

buttonElement.addEventListener('click', addTarefa)

function removeTarefa(pos){
    tarefas.splice(pos,1)
    mostrando()
    salvarNoLocalStorage()
}

function salvarNoLocalStorage(){
    localStorage.setItem('list_tarefas',JSON.stringify(tarefas))
}