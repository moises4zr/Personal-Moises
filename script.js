//funcion escribit texto
function escribirTexto(texto, elementoId) {
    let index = 0;
    const elemento = document.getElementById(elementoId);

    function escribir() {
        if (index < texto.length) {
            elemento.textContent += texto.charAt(index);
            index++;
            setTimeout(escribir, 100);
        }
    }

    escribir();
}

//para el index//
if (document.getElementById("AnimatedText")) {
    escribirTexto("Hi, It's Moises", "AnimatedText");
}

//para skills//
if (document.getElementById("SkillsText")) {
    escribirTexto("My skills", "SkillsText");
}

//funcion cambio de tema
const botonTema = document.getElementById('cambiar-tema');
botonTema.addEventListener('click', function() {
    document.body.classList.toggle('white-theme');
}); 

    //Esta funcion por alguna razon no me funciona al ejecutarla aca, la tengo que ejecutar en el html
    document.addEventListener('DOMContentLoaded', () => {
        const progressBars = document.querySelectorAll('.progress');
        progressBars.forEach(barra => {
            const porcentajeObjetivo = barra.style.getPropertyValue('--wth');

            barra.style.setProperty('--wth', '0%');
            setTimeout(() => {
                barra.style.setProperty('--wth', porcentajeObjetivo);
            }, 100); 
        });
    });



