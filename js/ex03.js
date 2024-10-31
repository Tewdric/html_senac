

function enviar(){
    var valor = document.getElementById("textinput").value;
    var dataNasc = new Date(valor)
    var dataToday = new Date()
    
    var resultado = dataToday.getFullYear()-dataNasc.getFullYear()

    var mesNas = dataNasc.getMonth()+1
    var mesToday = dataToday.getMonth()+1

    if(mesNas <= mesToday){
        document.getElementById('p').innerHTML=`<h1>Sua idade: ${resultado} anos</h1>`
    }else{
        document.getElementById('p').innerHTML=`<h1>Sua idade: ${resultado-1} anos</h1>`
    }
}