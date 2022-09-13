var v, p, vt

v = prompt ("Digite o valor a ser depositado: ")

p = v * 0.007/100
vt = parseFloat(v) + parseFloat(p)


alert ("O valor total do seu saldo na poupança, junto com o juros ao mês, é de " + vt + " reais.")