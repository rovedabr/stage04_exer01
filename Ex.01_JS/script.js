alert("Calculadora")

let numberOne = prompt("Insira o primeiro número: ")
let numberTwo = prompt("Insira o segundo número: ")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = (numberOne + numberTwo)
let subtraction = (numberOne - numberTwo)
let multiplication = (numberOne * numberTwo)
let division = (numberOne / numberTwo).toFixed(2)
let remainder = (numberOne % numberTwo)

alert(`A soma dos dois números é ${sum}`)
alert(`A subtração dos dois números é ${subtraction}`)
alert(`A multiplicação dos dois números é ${multiplication}`)
alert(`A divisão dos dois números é ${division} com resto ${remainder}`)

let remainderSum = (sum % 2)


if (remainderSum == 0) {
  alert(`A soma dos números é ${sum} que é par!`)
} else {
  alert(`A soma dos números é ${sum} que é ímpar!`)
}

if (numberOne == numberTwo) {
  alert(`Os números inseridos são iguais!`)
} else {
  alert(`Os números inseridos são diferentes!`)
}
