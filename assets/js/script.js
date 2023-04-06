/* =================  animação da digitação ================= */



var escrita = new Typed(".principal-info__digitacao",{
    strings:["","Web Designer", "Web Developer", "Full-stack"],
    typeSpedd:100,
    BackSpeed:60,
    loop:true
})





/* =================  Barra lateral ================= */

const nav = document.querySelector(".menu-lateral"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".secao"),
    totalSection = allSection.length;
    for(let i =0; i<totalNavList; i++)
    {
       
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function(){

            for(let i=0; i<totalSection; i++){
                allSection[i].classList.remove("secao-atras");
            }

            for(let j=0; j<totalNavList; j++){
                if(navList[j].querySelector("a").classList.contains("active")){
                    allSection[j].classList.add("secao-atras")
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
        })
    }

    function showSection(element){

        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("active");
        }

        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
        
    }

    const navTogglerbtn = document.querySelector(".navegacao-lateral"),
        menuLateral = document.querySelector(".menu-lateral");
        navTogglerbtn.addEventListener("click", ()=>{
            
            botaoDaBarraLateral();
        })

        function botaoDaBarraLateral(){
            menuLateral.classList.toggle("abrir")
        }