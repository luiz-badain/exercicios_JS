function calcularTotal() {
    const valorProduto1 = parseFloat(document.getElementById("valorProduto1").value) || 0;
    const quantidadeProduto1 = parseFloat(document.getElementById("quantidadeProduto1").value) || 0;
    
    const valorProduto2 = parseFloat(document.getElementById("valorProduto2").value) || 0;
    const quantidadeProduto2 = parseFloat(document.getElementById("quantidadeProduto2").value) || 0;

    const valorProduto3 = parseFloat(document.getElementById("valorProduto3").value) || 0;
    const quantidadeProduto3 = parseFloat(document.getElementById("quantidadeProduto3").value) || 0;

    const totalVenda = (valorProduto1 * quantidadeProduto1) + (valorProduto2 * quantidadeProduto2) + (valorProduto3 * quantidadeProduto3);

    document.getElementById("resultado").textContent = "Total: R$ " + totalVenda.toFixed(2);
}