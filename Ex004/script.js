var nome = prompt('Qual é o seu nome? ')

document.write(`Olá <strong>${nome}</strong>! Seu nome tem ${nome.length} letras.<br>`)

//document.write <- escreve no corpo da página , ${nome.length} <- quantidade de letras na variável nome
// writeln <- pula a linha, mas aqui precisou do <br>
// <strong> <- negrito

document.write(`Seu nome em maiúsculas é ${nome.toUpperCase()}<br>`)
// ${nome.toUpperCase()} <- coloca em maiúsculas

document.write(`Seu nome em minúsculas é ${nome.toLowerCase()}`)
// ${nome.toLowerCase()} <- coloca em minúsculas


// n1.toLocaleString('pt-br', {style: 'currency', currency: 'EUR'})

// n1.toLocaleString <- string localizada pra parte do mundo? 
// ('pt-br', <- em português
// {style: 'currency', <- mostrar em valor monetário
// currency: 'BRL'}) <- em real 