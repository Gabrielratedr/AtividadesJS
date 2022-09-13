let i

i = prompt("Digite o índice de poluição: ")

if (i == 0.3 && i <= 0.39) { 
    alert ("Devido ao índice informado, todas as industrias do grupo 1 deverão suspender suas atividades.")
}
if (i == 0.4 && i <= 0.49) {
    alert ("Devido ao índice informado, todas as industrias do grupo 1 e 2 deverão suspender suas atividades.")
}
if (i >= 0.5) {
    alert ("Devido ao índice informado, todas as industrias deverão suspender suas atividades.")
}