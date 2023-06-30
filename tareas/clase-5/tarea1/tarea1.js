const $btnCalcularSalarioMensual = document.getElementById('calcular');
const $btnLimpiarDatos = document.getElementById('limpiar');

const calcularSalarioMensual = (e) => {
    const $inputSalarioAnual = document.getElementById('input_salario_anual');
    const $inputMostrarSalarioMensual = document.getElementById('mostrar');
    const salarioAnual = Number($inputSalarioAnual.value);

    const salarioMensual = salarioAnual / 12;

    $inputMostrarSalarioMensual.value = salarioMensual.toFixed(2);

    $inputSalarioAnual.value = "";

    e.preventDefault();
}

const limpiarDatos = () => {
    const $inputMostrarSalarioMensual = document.getElementById('mostrar');
    $inputMostrarSalarioMensual.value = "";
}
 
$btnCalcularSalarioMensual.addEventListener('click', calcularSalarioMensual);
$btnLimpiarDatos.addEventListener('click', limpiarDatos);

