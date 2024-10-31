const botao = document.getElementById('enviar')

botao.addEventListener('click',function(){
    var nome = document.getElementById('nome').value
    var senha = document.getElementById('senha').value

    if(nome,senha ==""){
        document.getElementById('msg').innerHTML=`<p style="color: red;">Os campos não podem ser vazios!</p>`
    }else if(nome != 'admin'){
        document.getElementById('msg').innerHTML=`<p style="color: red;">Acesso negados!</p>`
    }
    else{
        document.getElementById('msg').innerHTML=`<p style="color: green;">Bem Vindo ${nome}!</p>`
    }
    

})  
