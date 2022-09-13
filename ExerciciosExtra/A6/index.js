let x1, x2, y1, y2, d

x2 = prompt ("Digite um número: ")
x1 = prompt ("Digite um número: ")
y2 = prompt ("Digite um número: ")
y1 = prompt ("Digite um número: ")

x1 = (x2 - x1)**2
y1 = (y2 - y1)**2
d = parseFloat(x1) + parseFloat(y1)
d = Math.sqrt(d)

alert ("A distância entre os pontos é de " + parseFloat(d) + ".")