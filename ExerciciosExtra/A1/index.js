let a, m, d, aed, med, total

a = prompt ("Quantos anos o(a) senhor(a) tem?")
m = prompt ("Agora, diga, exatamente, quantos meses de vida o(a) senhora(a) tem, além dos anos: ")
d = prompt ("Agora, diga quantos dias o(a) senhor(a) tem, além dos anos e meses: ")

aed = a * 365
med = m * 30
total = parseInt(aed) + parseInt(med) + parseInt(d)

alert ("O(a) senhor(a) tem, ao total, " + total + " dias de vida.")