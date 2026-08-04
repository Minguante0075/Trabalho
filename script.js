/*==================================================
NEXTCORE
SCRIPT.JS
Versão otimizada
==================================================*/


/*==================================================
ELEMENTOS
==================================================*/


const header = document.querySelector("header");

const menuButton = document.querySelector(".menu-mobile");

const nav = document.querySelector("nav");

const navLinks = document.querySelectorAll("nav a");

const backToTop = document.querySelector("#backToTop");

const revealElements = document.querySelectorAll(".reveal");

const sections = document.querySelectorAll("section[id]");

const cards = document.querySelectorAll(
    ".about-card, .solution-card, .culture-item, .job"
);

const heroCircle = document.querySelector(".hero-circle");

const glassCard = document.querySelector(".glass-card");





/*==================================================
MENU MOBILE
==================================================*/


if(menuButton && nav){


    menuButton.addEventListener("click",()=>{


        nav.classList.toggle("active");

        menuButton.classList.toggle("active");


    });


}





/*==================================================
FECHAR MENU AO CLICAR
==================================================*/


navLinks.forEach(link=>{


    link.addEventListener("click",()=>{


        nav?.classList.remove("active");

        menuButton?.classList.remove("active");


    });


});







/*==================================================
FECHAR MENU COM ESC
==================================================*/


document.addEventListener("keydown",(event)=>{


    if(event.key === "Escape"){


        nav?.classList.remove("active");

        menuButton?.classList.remove("active");


    }


});







/*==================================================
HEADER AO ROLAR
==================================================*/


function headerScroll(){


    if(!header) return;



    if(window.scrollY > 40){


        header.classList.add("scrolled");


    }else{


        header.classList.remove("scrolled");


    }


}



window.addEventListener(
    "scroll",
    headerScroll
);







/*==================================================
BOTÃO VOLTAR AO TOPO
==================================================*/


function toggleBackTop(){


    if(!backToTop) return;



    if(window.scrollY > 500){


        backToTop.classList.add("show");


    }else{


        backToTop.classList.remove("show");


    }


}



window.addEventListener(
    "scroll",
    toggleBackTop
);




if(backToTop){


    backToTop.addEventListener(
        "click",
        ()=>{


            window.scrollTo({

                top:0,

                behavior:"smooth"

            });


        }
    );


}







/*==================================================
SCROLL SUAVE
==================================================*/


document.querySelectorAll(
    'a[href^="#"]'
)
.forEach(anchor=>{


    anchor.addEventListener(
        "click",
        function(event){


            const target =
            document.querySelector(
                this.getAttribute("href")
            );



            if(target){


                event.preventDefault();



                target.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });


            }


        }
    );


});







/*==================================================
REVEAL NO SCROLL
==================================================*/


function revealOnScroll(){


    revealElements.forEach(element=>{


        const position =
        element.getBoundingClientRect().top;



        const limit =
        window.innerHeight - 120;



        if(position < limit){


            element.classList.add("active");


        }


    });


}



window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();







/*==================================================
MENU ATIVO
==================================================*/


function activeMenu(){


    const scrollPosition =
    window.scrollY + 150;



    sections.forEach(section=>{


        const top =
        section.offsetTop;



        const height =
        section.offsetHeight;



        const id =
        section.getAttribute("id");



        const link =
        document.querySelector(
            `nav a[href="#${id}"]`
        );



        if(!link) return;



        if(
            scrollPosition >= top &&
            scrollPosition < top + height
        ){


            link.classList.add("active");


        }else{


            link.classList.remove("active");


        }


    });


}



window.addEventListener(
    "scroll",
    activeMenu
);







/*==================================================
ANIMAÇÃO DOS CARDS
==================================================*/


cards.forEach((card,index)=>{


    card.style.transitionDelay =
    `${index * 0.08}s`;


});







/*==================================================
PARALLAX CÍRCULO HERO
==================================================*/


window.addEventListener(
"scroll",
()=>{


    if(!heroCircle) return;



    const movement =
    window.scrollY * 0.05;



    heroCircle.style.marginTop =
    `${movement}px`;



});







/*==================================================
EFEITO 3D GLASS CARD
==================================================*/


if(glassCard){


window.addEventListener(
"mousemove",
(event)=>{


    const x =
    (window.innerWidth / 2 - event.clientX) / 50;



    const y =
    (window.innerHeight / 2 - event.clientY) / 50;



    glassCard.style.setProperty(
        "--rotateX",
        `${-y}deg`
    );



    glassCard.style.setProperty(
        "--rotateY",
        `${x}deg`
    );


});


window.addEventListener(
"mouseleave",
()=>{


    glassCard.style.setProperty(
        "--rotateX",
        "0deg"
    );


    glassCard.style.setProperty(
        "--rotateY",
        "0deg"
    );


});


}







/*==================================================
RIPPLE NOS BOTÕES
==================================================*/


const buttons =
document.querySelectorAll(
".btn-primary, .btn-secondary, .btn-nav, .contact-form button"
);



buttons.forEach(button=>{


    button.addEventListener(
    "click",
    function(event){



        const ripple =
        document.createElement("span");



        ripple.classList.add("ripple");



        const rect =
        this.getBoundingClientRect();



        ripple.style.left =
        `${event.clientX - rect.left}px`;



        ripple.style.top =
        `${event.clientY - rect.top}px`;



        this.appendChild(ripple);



        setTimeout(()=>{


            ripple.remove();


        },600);



    });


});







/*==================================================
CARREGAMENTO
==================================================*/


window.addEventListener(
"load",
()=>{


    document.body.classList.add(
        "loaded"
    );


});







/*==================================================
RESIZE
==================================================*/


window.addEventListener(
"resize",
()=>{


    revealOnScroll();


});







/*==================================================
FIM SCRIPT.JS
NEXTCORE
==================================================*/