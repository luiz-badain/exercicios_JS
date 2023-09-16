const botaoConverter = document.getElementById("botaoConverter");

botaoConverter.addEventListener("click", function() {
    const temperatura = parseFloat(document.getElementById("temperatura").value);
    const unidade = document.querySelector('input[name="unidade"]:checked').value;

    let resultado = 0;

    if (unidade === 'Celsius') {
        resultado = (temperatura - 32) * 5/9;
    } else {
        resultado = (temperatura * 9/5) + 32;
    }
    
    document.getElementById("resultado").textContent = `Resultado: ${resultado.toFixed(2)}° ${unidade}`;
});