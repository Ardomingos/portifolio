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

            removeBackSection();

            for(let j=0; j<totalNavList; j++){
                if(navList[j].querySelector("a").classList.contains("active")){

                    addBackSection(j);
                    
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
            if(window.innerWidth < 1200){
                botaoDaBarraLateral();
            }
        })
    }

    function showSection(element){

        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("active");
        }

        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active");
        
    }
    
    function updateNav(element)
    {
       for(let i=0; i<totalNavList; i++)
       {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1]; 
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active");
        }
       }
    }
    

    document.querySelector(".botao__contato").addEventListener("click", function(){
        const sectionIndex = this.getAttribute("data-section-index");
        showSection(this)
        updateNav(this)
        removeBackSection();
        addBackSection(sectionIndex);
    })
 
    const navTogglerbtn = document.querySelector(".navegacao-lateral"),
        menuLateral = document.querySelector(".menu-lateral");
        navTogglerbtn.addEventListener("click", ()=>{
            
            botaoDaBarraLateral();
        })

        function botaoDaBarraLateral(){
            menuLateral.classList.toggle("abrir");
            navTogglerbtn.classList.toggle("abrir");
            for(let i=0; i<totalSection; i++){
                allSection[i].classList.toggle("abrir");
            }
        }

        function removeBackSection(){
            for(let i=0; i<totalSection; i++){
                allSection[i].classList.remove("secao-atras");
            }
        }

        function addBackSection(num){
            allSection[num].classList.add("secao-atras")
        }