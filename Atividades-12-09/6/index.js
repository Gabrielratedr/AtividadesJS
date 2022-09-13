let id

id = prompt ("Digite a sua idade: ")

if (id >= 5 && id <= 7) {
    alert ("Parabéns! Você foi alocado na categoria A.")
}
if (id >= 8 && id <= 11) {
    alert ("Parabéns! Você foi alocado na categoria B.")
}
if (id >= 12 && id <= 13) {
    alert ("Parabéns! Você foi alocado na categoria C.")
}
if (id >= 14 && id <= 17) {
    alert ("Parabéns! Você foi alocado na categoria D.")
} 
if (id >= 18) {
    alert ("Parabéns! Você foi alocado na categoria para adultos.")
}
if (id <= 4) {
    alert ("Desculpe! Você não possui idade o suficiente para ser alocado em uma de nossas categorias. :(")
}