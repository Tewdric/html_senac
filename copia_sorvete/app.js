const carrossel = document.querySelector(".carrossel")
const slides = document.querySelectorAll(".slide")
const controlLinks = document.querySelectorAll(".controls a") 


var i = 0,
 j =2,
 intervalId;

function mudar(icon){
    const borda = document.getElementById("conteudo");
    const fundo = document.getElementById("fundo");
    const esquerdinha = document.getElementById("esquerdinha");
    const menu = document.getElementById("menu");
    switch(icon){
        case "blue":
            borda.style.border="7rem solid  rgb(59, 179, 226)";
            borda.style.backgroundColor="rgb(59, 179, 226)";
            fundo.style.backgroundColor ="skyblue"
            esquerdinha.style.backgroundColor="rgb(59, 179, 226)"
            menu.style.backgroundColor="rgb(59, 179, 226)"
            break
        case "green":
            borda.style.border="7rem solid rgb(134, 192, 47)";
            borda.style.backgroundColor="rgb(134, 192, 47)";
            fundo.style.backgroundColor ="rgb(163, 197, 111)"
            esquerdinha.style.backgroundColor="rgb(134, 192, 47)"
            menu.style.backgroundColor="rgb(134, 192, 47)"
            break
        case "purple":
            borda.style.border="7rem solid rgb(146, 44, 146)";
            borda.style.backgroundColor ="rgb(146, 44, 146)"
            fundo.style.backgroundColor ="rgb(151, 77, 151)"
            esquerdinha.style.backgroundColor="rgb(146, 44, 146)"
            menu.style.backgroundColor="rgb(146, 44, 146)"
            break
        case "yellow":
            borda.style.border="7rem solid rgb(235, 235, 67)";
            borda.style.backgroundColor ="rgb(235, 235, 67)"
            fundo.style.backgroundColor ="rgb(231, 231, 120)"
             esquerdinha.style.backgroundColor="rgb(235, 235, 67)"
             menu.style.backgroundColor="rgb(235, 235, 67)"
            break
    }
}

const intervalFn =()=>{
    intervalId=setInterval(() => {
        carrossel.style.rotate=`-${++i*90}deg`;

        document.querySelector(".slide.active").classList.remove("active")
        const activeSlide = document.querySelector(`.slide:nth-child(${++j})`)
        activeSlide.classList.add("active");
        j===4&&(j=0)

    }, 2000);
}

intervalFn()    

controlLinks.forEach(control => {
    control.addEventListener("click",()=>{
        clearInterval(intervalId)
        carrossel.style.rotate =`-${
    (180-j)+Number(control.dataset.index)*90
        }deg`

        document.querySelector(".slide.active").classList.remove("active")
        const activeSlide = document.querySelector(`.slide:nth-child(${control.dataset.index})`)
        activeSlide.classList.add("active");


    })

carrossel.addEventListener("mouseenter",()=>{
    clearInterval(intervalId)
    console.log("pause")
    console.log(intervalId)
})

carrossel.addEventListener("mouseleave",()=>{
    clearInterval(intervalId)
    intervalFn()
})

control.addEventListener("mouseleave",()=>{
    clearInterval(intervalId)
    console.log("Resete")
    intervalFn()

    const borda = document.getElementById("conteudo");

    borda.style.border="7rem solid #eebe97;"

})
});