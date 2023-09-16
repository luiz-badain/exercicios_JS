let numeros = [];

function adicionarNumero() {
  const numero = parseFloat(document.getElementById('numero').value);
  numeros.push(numero);
  document.getElementById('numero').value = '';
}

function mostrarNumeros() {
  document.getElementById('resultado').innerText = `Números inseridos: ${numeros.join(', ')}`;
}

function mostrarMaiorNumero() {
  const maiorNumero = Math.max(...numeros);
  document.getElementById('resultado').innerText = `Maior número: ${maiorNumero}`;
}

function mostrarMenorNumero() {
  const menorNumero = Math.min(...numeros);
  document.getElementById('resultado').innerText = `Menor número: ${menorNumero}`;
}