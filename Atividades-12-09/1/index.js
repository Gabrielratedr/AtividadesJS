let p, e

p = prompt ("Digite quantos quilos de tomate você tem: ")

if (p > 50) {
    e = p - 50
    p = p - 50
    p = p*4
    alert ("Seu excedente é de " + e + " quilos." + "\nO total a se pagar por causa do excedente é de " + p + " reais.")
} else {
    alert ("Você não possui peso excedente.")
}