/* ========================= botão para mudar o tema ========================= */



const mudancaDeEstilo = document.querySelector(".troca-tema__botao");

mudancaDeEstilo.addEventListener("click", ()=>{    
  document.querySelector(".troca-tema").classList.toggle("abrir");
});


// esconder o estilo com o scroll


window.addEventListener("scroll", ()=>{
    if(document.querySelector(".troca-tema").classList.contains("abrir")){
        if(document.querySelector(".troca-tema").classList.remove("abrir"));
    } 
});







/* ========================= Cores do tema ========================= */


 const alternarEstilo = document.querySelectorAll(".alternar-estilo");

 function setActiveStyle(cor){
    alternarEstilo.forEach((style) => {
        if(cor === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        } 
        else 
        {
            style.setAttribute("disabled", "true");
        }
    });
 }





 /* ========================= Cores do tema Noturno ========================= */

 const diaNoite = document.querySelector(".dia-noite");
 diaNoite.addEventListener("click", () => {
    diaNoite.querySelector("i").classList.toggle("fa-sun");
    diaNoite.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
 })


 window.addEventListener("load", () => {
    
    if(document.body.classList.contains("dark"))
    {
        diaNoite.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        diaNoite.querySelector("i").classList.add("fa-moon");
    }
 })

