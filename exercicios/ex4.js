const botaoCalcular = document.getElementById("calcularGasto");

botaoCalcular.addEventListener("click", function() {
    const quilometragem = parseFloat(document.getElementById("quilometragem").value) || 0;
    const valorCombustivel = parseFloat(document.getElementById("valorCombustivel").value) || 0;

    const litrosGastos = quilometragem / 8;
    const gastoTotal = litrosGastos * valorCombustivel;

    document.getElementById("resultado").textContent = "Gasto total de combustivel: R$ " + gastoTotal.toFixed(2);
});