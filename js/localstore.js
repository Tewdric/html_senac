const nameForm = document.querySelector("#name-form")
const welcome = document.querySelector("#welcome")
const logout = document.querySelector("#logout")

function checkUser(){

    const userName = localStorage.getItem('name')

    if(userName){
        nameForm.style.display ='none'
        welcome.style.display ='block'

        const userNameElement = document.querySelector('#username')

        userNameElement.innerHTML=`${userName}`
    }else{
        nameForm.style.display ='block'
        welcome.style.display ='none'
    }
}

logout.addEventListener('click',()=>{
    localStorage.removeItem('name')

    checkUser()
})

nameForm.addEventListener("submit",(e)=>{
    e.preventDefault()

    const input_name = document.querySelector('#name')

    localStorage.setItem('name',input_name.value)

    input_name.value=""

    checkUser()
})

checkUser()