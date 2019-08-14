const soma = "+"
const subt = "-"
const div = "/"
const multipli = "x"

const exibirTela = document.querySelector('.screen')

var valorAtu = 0
var valorAnt = 0
var resultado = 0
var oper = 0
var operando = false

function show(numero) {
  if (operando) {
    exibirTela.innerText = "";
    exibirTela.innerText += numero
  } else {
    exibirTela.innerText += numero

  }

}

function limp() {
  exibirTela.innerText = ""
}

function pegaVal(numero) {
  valorAtu = Number(numero)
  show(numero)
}


function op(valor) {
  oper = valor
  operando = true
  valorAnt = resultado
  valorAtu = exibirTela.innerText

  if (valor == soma) {
    exibirTela.innerText = ""

    resultado = (Number(valorAnt) + Number(valorAtu))
    show(resultado)
    operando = true

  } else if (valor == subt) {
    exibirTela.innerText = ""

    if (valorAnt == 0) {
      resultado = (Number(valorAtu) - Number(valorAnt))
      show(resultado)
      operando = true
    } else {
      resultado = (Number(valorAnt) - Number(valorAtu))
      show(resultado)
      operando = true

    }

  } else if (valor == div) {
    exibirTela.innerText = ""

    if (valorAnt == 0 || valorAnt <= 0) {
      resultado = (Number(valorAtu) / Number(1))
      show(resultado)
      operando = true
    } else {
      resultado = (Number(valorAnt) / Number(valorAtu))
      show(resultado)
      operando = true
    }

  } else if (valor == multipli) {
    exibirTela.innerText = ""

    if (valorAnt == 0) {
      resultado = (Number(valorAtu) * Number(1))
      show(resultado)
      operando = true
    } else {
      resultado = (Number(valorAtu) * Number(valorAnt))
      show(resultado)
      operando = true
    }
  }

}

const botaoIgual = function () {
  op(oper);
}