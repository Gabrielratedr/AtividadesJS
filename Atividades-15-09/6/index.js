let taxaImposto, custo, vendaFinal

custo = prompt ("Digite o custo do produto: ")
taxaImposto = prompt ("Digite o imposto sobre a venda em porcentagem: ")

function somalImposto (custo, taxaImposto) {
    vendaFinal = parseFloat(custo) + parseFloat((taxaImposto/100) * custo)
    return alert (vendaFinal)
}
somalImposto (custo, taxaImposto)