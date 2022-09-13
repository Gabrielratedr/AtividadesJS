let p1 = 2.3, p2 = 5, n1, n2, m

n1 = prompt ("Digite sua primeira nota: ")
n2 = prompt ("Digite sua segunda nota: ")

m = parseFloat(p1*n1) + parseFloat((p2*n2))
m = m/(parseFloat(p1)+parseFloat(p2))

alert (m)