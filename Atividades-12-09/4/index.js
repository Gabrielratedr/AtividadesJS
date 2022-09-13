let n

n = prompt ("Digite um número: ")

if (n%2 == 0 && n >= 0) {
    alert ("O número é par e positivo")
}
else if (n%2 != 0 && n >= 0) {
    alert ("O número é ímpar e positivo")
}
else if (n%2 != 0 && n < 0) {
    alert ("O número é ímpar e negativo")
}
else if (n%2 == 0 && n < 0) {
    alert ("O número é par e negativo")
}