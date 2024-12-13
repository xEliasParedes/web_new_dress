let listElements = document.querySelectorAll('.list__button--click');

// Función para cerrar el menú
function closeMenu() {
    listElements.forEach(listElement => {
        listElement.classList.remove('arrow');
        listElement.nextElementSibling.style.height = '0';
    });
}

listElements.forEach(listElement => {
    listElement.addEventListener('click', (event) => {
        event.stopPropagation(); // Evita que el clic se propague al documento

        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if (menu.clientHeight == 0) {
            height = menu.scrollHeight;
        }

        menu.style.height = `${height}px`;

        // Cierra los demás menús abiertos
        listElements.forEach(otherElement => {
            if (otherElement !== listElement && otherElement.classList.contains('arrow')) {
                otherElement.classList.remove('arrow');
                otherElement.nextElementSibling.style.height = '0';
            }
        });
    });
});

// Controlador de eventos para cerrar el menú cuando se hace clic en cualquier otro lugar del documento
document.addEventListener('click', () => {
    closeMenu();
});

/*---------------------------------------------------------- */
let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function () {


  let Desplazamiento = window.pageYOffset;
  if (ubicacionPrincipal >= Desplazamiento) {
    document.getElementById('cabecera').style.top = '-17px';
    document.getElementById('nav').style.top = '71px';

  }
  else {
    document.getElementById('cabecera').style.top = '-200px';
    document.getElementById('nav').style.top = '-200px';
    document.querySelectorAll('#code_menu ').forEach(function (checkElement) {
      checkElement.checked = false;
    });
  }
  ubicacionPrincipal = Desplazamiento;
}



/*---------------------------------------------------------- */
document.addEventListener('click', function (event) {
  // Esta función se ejecutará cuando se haga clic en cualquier elemento del documento

  // Obtén una referencia al elemento excluido y verifica si el elemento en el que se hizo clic o alguno de sus descendientes es el elemento excluido
  var excludedElement = document.getElementById('menu');
  if (excludedElement && (excludedElement === event.target || excludedElement.contains(event.target))) {
    // Si el elemento en el que se hizo clic o alguno de sus descendientes es el elemento excluido, no se realiza ninguna acción
    return;
  }

  // Realiza aquí las acciones que deseas ejecutar cuando se hace clic en cualquier otro elemento
  console.log('Se hizo clic en otro elemento');
  document.querySelectorAll('#code_menu ').forEach(function (checkElement) {
    checkElement.checked = false;
  })
});

/******************************************************************************* */

function menuNormal1() {
  console.log("superior a 1024")

  let ubicacionSecundaria = window.pageYOffset;
  window.onscroll = function () {
    let Desplazamiento = window.pageYOffset;
    if (ubicacionSecundaria >= Desplazamiento) {
      document.getElementById('cabecera').style.top = '-17px';
      document.getElementById('nav').style.top = '67px';

    } else {
      document.getElementById('cabecera').style.top = '-200px';
      document.getElementById('nav').style.top = '-200px';

    }
    ubicacionSecundariax = Desplazamiento;
  }

}

function menuNormal2() {
  console.log("entre 993 y 1024")


  let ubicacionSecundaria = window.pageYOffset;
  window.onscroll = function () {
    let Desplazamiento = window.pageYOffset;
    if (ubicacionSecundaria >= Desplazamiento) {
      document.getElementById('cabecera').style.top = '-9px';
      document.getElementById('nav').style.top = '55px';

    } else {
      document.getElementById('cabecera').style.top = '-200px';
      document.getElementById('nav').style.top = '-200px';

    }
    ubicacionSecundaria = Desplazamiento;
  }

}

function menuMediano() {
  console.log("entre 577 y 992")


  let ubicacionSecundaria = window.pageYOffset;
  window.onscroll = function () {
    let Desplazamiento = window.pageYOffset;
    if (ubicacionSecundaria >= Desplazamiento) {
      document.getElementById('cabecera').style.top = '-9px';
      document.getElementById('nav').style.top = '55px';

    } else {
      document.getElementById('cabecera').style.top = '-200px';
      document.getElementById('nav').style.top = '-200px';
      document.querySelectorAll('#code_menu ').forEach(function (checkElement) {
        checkElement.checked = false;
      });

    }
    ubicacionSecundaria = Desplazamiento;
  }

}

function menuChico1() {
  console.log("entre 392 y 576")


  let ubicacionSecundaria = window.pageYOffset;
  window.onscroll = function () {
    let Desplazamiento = window.pageYOffset;
    if (ubicacionSecundaria >= Desplazamiento) {
      document.getElementById('cabecera').style.top = '-9px';
      document.getElementById('nav').style.top = '55px';

    } else {
      document.getElementById('cabecera').style.top = '-200px';
      document.getElementById('nav').style.top = '-200px';
      document.querySelectorAll('#code_menu ').forEach(function (checkElement) {
        checkElement.checked = false;
      });

    }
    ubicacionSecundaria = Desplazamiento;
  }
}

function menuChico2() {
  console.log("entre 319 y 391")


  let ubicacionSecundaria = window.pageYOffset;
  window.onscroll = function () {
    let Desplazamiento = window.pageYOffset;
    if (ubicacionSecundaria >= Desplazamiento) {
      document.getElementById('cabecera').style.top = '-9px';
      document.getElementById('nav').style.top = '55px';

    } else {
      document.getElementById('cabecera').style.top = '-200px';
      document.getElementById('nav').style.top = '-200px';
      document.querySelectorAll('#code_menu ').forEach(function (checkElement) {
        checkElement.checked = false;
      });

    }
    ubicacionSecundaria = Desplazamiento;
  }
}





var anchoVentana2 = window.innerWidth
window.onresize = function () {
  anchoVentana2 = window.innerWidth


  if (anchoVentana2 > 1024) {
    menuNormal1();

  } else if (anchoVentana2 > 993 && anchoVentana2 < 1024) {
    menuNormal2();

  } else if (anchoVentana2 > 577 && anchoVentana2 < 992) {
    menuMediano();


  } else if (anchoVentana2 > 392 && anchoVentana2 < 576) {
    menuChico1();


  } else if (anchoVentana2 > 319 && anchoVentana2 < 391) {
    menuChico2();

  }

};









