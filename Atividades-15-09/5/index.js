let n1, n2, n3, maior, menor

n1 = prompt ("Digite um número: ")
n2 = prompt ("Digite um número: ")
n3 = prompt ("Digite um número: ")

function x (n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        maior = n1
    }
    if (n2 > n1 && n2 > n3) {
        maior = n2
    }
    if (n3 > n1 && n3 > n2) {
        maior = n3
    }
    return alert (maior)
}

function y (n1, n2, n3) {
    if (n1 < n2 && n1 < n3) {
        menor = n1
    }
    if (n2 < n1 && n2 < n3) {
        menor = n2
    }
    if (n3 < n1 && n3 < n2) {
        menor = n3
    }
    return alert (menor)
}

x (parseInt(n1), parseInt(n2), parseInt(n3))
y (parseInt(n1), parseInt(n2), parseInt(n3))