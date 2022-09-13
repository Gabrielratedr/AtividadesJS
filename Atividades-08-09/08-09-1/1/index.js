var c, perc, pc, vt

c = prompt ("Digite o preço custo: ")
perc = prompt ("Digite o percentual do produto: ")

pc = (perc/100) * c
vt = parseInt(pc) + parseInt(c)

alert ("O valor da venda, junto com o percentual informado é de " + vt + " reais.")