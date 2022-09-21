let n1, n2, soma, sub, multi, div

n1 = prompt ("Digite um número: ")
n2 = prompt ("Digite um número: ")

function x (n1, n2) {
    soma = parseFloat(n1) + parseFloat(n2)
    sub = n1 - n2
    multi = n1 * n2
    div = n1/n2

    return alert ("A soma de " + n1 + " com " + n2 + " dá " + soma + "." +
                 "\nA subtração de " + n1 + " com " + n2 + " dá " + sub + "." +
                 "\nA multiplicação de " + n1 + " com " + n2 + " dá " + multi + "." +
                 "\nA divisão de " + n1 + " com " + n2 + " dá " + div + ".")
}
x (n1, n2)