let s, n, e

n = prompt ("Digite o seu número de horas trabalhadas: ")

s = 10*n

if (n > 50) {
    e = 20*(n - 50)
    s = 500
    s = parseFloat(s) + parseFloat(e)
    alert ("Seu salário total é de " + s + " reais, juntamente com seu excedente de " + e + " reais.")
} else {
    alert ("Você não possui excedentes. \nSeu salário é de " + s + " reais.")
}