let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function(){
    let Desplazamiento = window.pageYOffset;
    if(ubicacionPrincipal >= Desplazamiento){
        document.getElementById('cabecera').style.top = '-22px';
    }
    else{
        document.getElementById('cabecera').style.top = '-100px';
   
    }
    ubicacionPrincipal = Desplazamiento;
}