const ICONO_MENU = document.querySelector(".menu-icono");
const NAV = document.querySelector(".nav");
const HEADER = document.querySelector(".header-principal");

var imagenes = ["https://i.postimg.cc/P5hnWBQS/2.jpg", "https://i.postimg.cc/vZSXYnT5/3.jpg", "https://i.postimg.cc/mk8CdxF7/4.jpg", "https://i.postimg.cc/3wRXDcs6/1.jpg" ];

//esconde o muestra el menu
ICONO_MENU.addEventListener("click", function(){
    NAV.classList.toggle("visible");
});

//cada 3 segundos cambia la imagen del fondo
var i = 0;
window.addEventListener("load", function(){
    setInterval(function(){
        HEADER.style.backgroundImage ="url(" +imagenes[i]+ ")";
        i ++;
        if( i == imagenes.length){
            i = 0;
        }
    }, 3000);
})