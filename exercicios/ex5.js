const botaoCalcular = document.getElementById("calcularCusto");

botaoCalcular.addEventListener("click", function() {
    const comprimento = parseFloat(document.getElementById("comprimento").value) || 0;
    const largura = parseFloat(document.getElementById("largura").value) || 0;

    const area = comprimento * largura;

    const custoTotal = area * 36;

    document.getElementById("resultado").textContent = "O custo do piso é de: R$ " + custoTotal.toFixed(2);
});