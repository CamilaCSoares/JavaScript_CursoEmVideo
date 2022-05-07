
var n1 = Number(window.prompt('Digite um número: ')) // comando prompt rentorna string

var n2 = parseInt(window.prompt('Digite outro número: ')) // retornou string

// pode ser Number.parseInt ou se quiser só parseInt ou só Number

var s = n1 + n2

window.alert(`A soma entre ${n1} e ${n2} é igual a ${s.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`)
        
// (number + number)+ para adição
// (string + string)+ para concatenação 