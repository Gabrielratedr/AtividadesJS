let idade, a, m, d, porc

idade = prompt ("Digite sua data de nascimento apenas em dias: ")


a = idade/365
m = (idade%365) / 30
idade = (idade%365)%30

alert ("Sua idade é de " + parseInt(a) + " anos " + parseInt(m) + " meses e " + idade + " dias.")
