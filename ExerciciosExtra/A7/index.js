let a, b, c, d, e, f, x, y

a = prompt ("Digite um número: ")
b = prompt ("Digite um número: ")
c = prompt ("Digite um número: ")
d = prompt ("Digite um número: ")
e = prompt ("Digite um número: ")
f = prompt ("Digite um número: ")


x = c*e - b*f
x = x/(a*e - b*d)
y = a*f - c*d
y = y/(a*e - b*d)

alert ("Os valores de X e Y são, respectivamente: " + x + " e " + y + ".")