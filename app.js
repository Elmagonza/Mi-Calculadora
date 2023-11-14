//Variables segun Id y clase

const displayValorAnterior = document.getElementById("valorAnterior");
const displayValorActual = document.getElementById("valorActual");
const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperadores = document.querySelectorAll(".operador");

//Display
const display = new Display(displayValorAnterior,displayValorActual);

//Interaccion
botonesNumeros.forEach(boton =>{
    boton.addEventListener('click',()=> display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach( boton =>{
    boton.addEventListener('click', ()=> display.computar(boton.value))
});

document.addEventListener('keydown', (event) => {
    const tecla = event.key;
    // Verifica si la tecla presionada es un número
    if (!isNaN(tecla)) {
        display.agregarNumero(tecla);
    }
});