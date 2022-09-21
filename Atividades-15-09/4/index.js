let peso, altura, imc

peso = prompt("Digite seu peso: ")
altura = prompt("Digite sua altura: ")

function x (peso, altura) {
imc = peso / (altura * altura)
return alert (imc.toFixed(2));
}

x (peso, altura);