document.getElementById('imcForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    let imc = peso / (altura * altura);
    imc = imc.toFixed(2); // Arredonda o IMC para duas casas decimais
    let resultado = document.getElementById('resultado');

    if (imc < 20) {
        resultado.innerHTML = `<div class="laranja">Seu IMC é ${imc}. Você está abaixo do peso indicado para sua altura.</div>`;
    } else if (imc >= 20 && imc <= 24.99) {
        resultado.innerHTML = `<div class="verde">Seu IMC é ${imc}. Seu peso está normal.</div>`;
    } else if (imc >= 25 && imc <= 29.99) {
        resultado.innerHTML = `<div class="amarelo">Seu IMC é ${imc}. Você tem sobrepeso.</div>`;
    } else if (imc >= 30) {
        resultado.innerHTML = `<div class="vermelho">Seu IMC é ${imc}. Você tem obesidade, procure ajuda médica!</div>`;
    }
});
