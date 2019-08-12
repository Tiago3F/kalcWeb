const zero = document.querySelector('button[data-val = "0"]')
const one = document.querySelector('button[data-val = "1"]')
const two = document.querySelector('button[data-val = "2"]')
const three = document.querySelector('button[data-val = "3"]')
const four = document.querySelector('button[data-val = "4"]')
const five = document.querySelector('button[data-val = "5"]')
const six = document.querySelector('button[data-val = "6"]')
const seven = document.querySelector('button[data-val = "7"]')
const eight = document.querySelector('button[data-val = "8"]')
const nine = document.querySelector('button[data-val = "9"]')

const clear = document.querySelector('button[data-val = "clear"]')
const ponto = document.querySelector('button[data-val = "."]')

const div = document.querySelector('button[data-val = "/"]')
const multipli = document.querySelector('button[data-val = "x"]')
const subt = document.querySelector('button[data-val = "-"]')
const soma = document.querySelector('button[data-val = "+"]')
const igual = document.querySelector('button[data-val = "="]')

const exibirTela = document.querySelector('.screen')


function show(numero){
    exibirTela.innerText += numero.innerText
}
 
function limp(){
    exibirTela.innerText = ""
}

function op (numero){
  if (numero.innerText == "+") {
     val = parseInt(exibirTela.innerText)
 }
  limp()
}