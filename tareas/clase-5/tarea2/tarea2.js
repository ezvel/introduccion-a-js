const $btnEnviar = document.getElementById('enviar');

const mostrarNombre = (nombre) => {
    const $output = document.getElementById('mostrar-informacion');
    const $p = document.createElement('p');
    $p.innerText = nombre;
    $output.appendChild($p);
}

const mostrarSegundoNombre = (segundoNombre) => {
    const $output = document.getElementById('mostrar-informacion');
    const $p = document.createElement('p');
    $p.innerText = segundoNombre;
    $output.appendChild($p);
}

const mostrarApellido = (apellido) => {
    const $output = document.getElementById('mostrar-informacion');
    const $p = document.createElement('p');
    $p.innerText = apellido;
    $output.appendChild($p);
}

const mostrarEdad = (edad) => {
    const $output = document.getElementById('mostrar-informacion');
    const $p = document.createElement('p');
    $p.innerText = edad;
    $output.appendChild($p);
}


function mostrarTituloBienvenido(nombre) {
    const $titulo = document.getElementById('titulo');
    $titulo.textContent += " " + nombre;
}

const resetearInformacion = () => {
    const $output = document.getElementById('mostrar-informacion');
    const $titulo = document.getElementById('titulo');
    $output.innerHTML = "";
    $titulo.textContent = "Bienvenido";

}

$btnEnviar.addEventListener('click', (e) => {
    resetearInformacion();

    const $inputNombre = document.getElementById('nombre');
    const $inputSegundoNombre = document.getElementById('segundo-nombre');
    const $inputApellido = document.getElementById('apellido');
    const $inputEdad = document.getElementById('edad');

    const nombre = $inputNombre.value;
    const segundoNombre = $inputSegundoNombre.value;
    const apellido = $inputApellido.value;
    const edad = $inputEdad.value;

    mostrarNombre(nombre);
    mostrarSegundoNombre(segundoNombre);
    mostrarApellido(apellido);
    mostrarEdad(edad);

    mostrarTituloBienvenido(nombre);

    e.preventDefault();
})