// SELECTOR
var sla = window.document.querySelector('div#msg')
sla.style.background ='green'


/* CLASS
window.document.getElementsByClassName('msg')[0]
*/

/* NAME
var d = document.getElementsByName('msg')[0]
d.innerText='Olá'
*/

/* ID
var mensagem = document.getElementById('msg')
mensagem.style.background = 'green'
mensagem.innerText='Estou aguardando...'
*/


var corpinho = window.document.body
corpinho.style.background = 'pink'


// MARCA

/// ele vai selecionar vários(getElements <- plural), para pegar só um [],
var testando = window.document.getElementsByTagName('p')[1] // a contagem começa no 0 (ou seja o 2° é o 3°)
// de boa ocultar o window 
window.document.write("Está escrito assim: " + testando.innerHTML) // ele vai puxar o parágrafo junto com sua formatação
//innerHTML -> texto que está dentro do segundo parágrafo ->[1] 
//innerText -> texto que está dentro do primeiro parágrafo ->[0] 
testando.style.color = 'red'

window.alert(testando.innerText)
