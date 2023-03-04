const formulario = document.querySelector('#formularioN');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const campoA = document.querySelector('#CampoA').value;
    const campoB = document.querySelector('#CampoB').value;

    const valorA = parseInt(campoA);
    const valorB = parseInt(campoB);

    if (valorB > valorA) {
        alert('Formulário válido!');
    } else {
        alert('Formulário inválido!');
    }
});