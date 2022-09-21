let n1, n2, resultado

n1 = prompt("Digite um número: ")
n2 = prompt("Digite a porcentagem que deseja de " + n1 + ":")

function x (n1, n2) {
    resultado = n2/100 * n1
    return alert(resultado);
}

x(n1, n2);