let h, m, saida

h = prompt("Digite que horas são: ")
m = prompt("Digite os minutos: ")

function conversao (h, m) {
    if (h == 24 && m >= 0 && m <= 59) {
        saida = h - 24
    } else if (h >= 13 && h <= 23 && m >= 0 && m <= 59) {
        saida = h - 12
    } else if (h >= 1 || h <= 11 && m >= 0 && m <= 59) {
        saida = h
    }
    return alert ("São " + saida + ":" + m + " A.M.")
}
conversao (h, m)

