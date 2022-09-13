let n1, n2, n3, n4, q1, q2, q3, q4

n1 = prompt("Digite um número: ")
n2 = prompt("Digite um número: ")
n3 = prompt("Digite um número: ")
n4 = prompt("Digite um número: ")

q1 = n1*n1
q2 = n2*n2
q3 = n3*n3
q4 = n4*n4

if (q3 >= 1000) {
    alert ("O resultado do quadrado de " + n3 + " é igual " + q3 + ".")
} else {
    alert ("O resultado do quadrado de " + n1 + " é " + q1 + "." +
             "\nO resultado do quadrado de " + n2 + " é " + q2 + "." +
             "\nO resultado do quadrado de " + n3 + " é " + q3 + "." +
             "\nO resultado do quadrado de " + n4 + " é " + q4 + ".")
}