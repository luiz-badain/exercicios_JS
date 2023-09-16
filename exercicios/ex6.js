function calcularPesoIdeal() {
    const altura = parseFloat(document.getElementById('altura').value);
    const sexo = document.getElementById('sexo').value;
    let pesoIdeal = 0;
  
    if (sexo === 'masculino') {
      pesoIdeal = (72.7 * altura) - 58;
    } else {
      pesoIdeal = (62.1 * altura) - 44.7;
    }
  
    document.getElementById('resultado').innerText = `Seu peso ideal é ${pesoIdeal.toFixed(2)} kg`;
  }