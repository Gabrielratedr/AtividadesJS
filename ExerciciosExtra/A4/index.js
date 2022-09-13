let a, b, c, r, r1, s, s1, d

a = prompt ("Digite um número: ")
b = prompt ("Digite um número: ")
c = prompt ("Digite um número: ")

r1 = parseInt(a) + parseInt(b)
r = r1*r1
s1 = parseInt(b) + parseInt(c)
s = s1*s1
d = (parseInt(r) + parseInt(s))/2

alert ("O resultado de R é igual a " + r + ".\nO resultado de S é igual a " + s + "\nO resultado de D é igual a " + d + ".")