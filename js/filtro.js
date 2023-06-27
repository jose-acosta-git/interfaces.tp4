"use strict";

let input = document.getElementById('usuario'); // Obtenemos el elemento de entrada de texto del input
let noResultsMessage = document.getElementById('no-results'); // Obtenemos el caso donde no se muestre ninguna noticia

// Agregamos el listener del input y ejecutamos cuando alguien typee en el
input.addEventListener('input', () => {
  let valorInput = input.value.toLowerCase(); // Obtiene el valor actual del input
  let noticias = document.querySelectorAll('#news-container .news-item');
  let resultadosEncontrados = false;

  // Recorre todas las noticias y muestra u oculta según el input
  noticias.forEach((noticia) => {
    let titulo = noticia.querySelector('h2').textContent.toLowerCase();
    
    if (titulo.includes(valorInput)) {
      noticia.style.display = 'block'; // Muestra la noticia
      resultadosEncontrados = true;
    } else {
      noticia.style.display = 'none'; // Oculta la noticia
    }
  });

  // Muestra u oculta el mensaje de "No se encontraron resultados"
  if (resultadosEncontrados) {
    noResultsMessage.style.display = 'none'; // Oculta el mensaje
  } else {
    noResultsMessage.style.display = 'block'; // Muestra el mensaje
  }
});