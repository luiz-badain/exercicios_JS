const botaoMostrar = document.getElementById("botaoMostrar");

botaoMostrar.addEventListener("click", function() {
    const valorMaximo = document.getElementById("numeroMaximo").value;
    
    let numerosPares = [];
    let soma = 0;

    for (let i = 2; i <= valorMaximo; i += 2) {
        numerosPares.push(i);
        soma += i;
    }

    document.getElementById("numerosPares").textContent = numerosPares.join(", ");
    document.getElementById("soma").textContent = soma;
});
