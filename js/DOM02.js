var pontos = 0

function mais(){
    pontos+=1

    document.getElementById('p').innerHTML=`Cliques: ${pontos}`
}

function menos(){
    pontos-=1
    if(pontos<0){
        pontos =0
        return alert('O número não pode ser menor que zero!!!')
        
     }
    document.getElementById('p').innerHTML=`Cliques: ${pontos}`
   
}

