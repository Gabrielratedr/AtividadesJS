let c, cf, p = 28/100, i = 45/100

cf = prompt ("Digite o custo de fábrica do carro: ")

c = parseFloat(cf) + parseFloat((p*cf)) + parseFloat((i*cf))

alert("O custo final do carro é de " + parseFloat(c) + " reais.")