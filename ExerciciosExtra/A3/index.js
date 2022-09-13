let s, h, m, m2

s = prompt ("Digite o tempo de duração em segundos: ")

h = s/3600
m = (s%3600)/60
s = (s%3600)%60


// 3665
alert ("O tempo do evento realizado na fábrica é de " + parseInt(h) + " horas " + parseInt(m) + " minutos e " + parseInt(s) + " segundos.")