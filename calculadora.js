var num1 = document.querySelector('#num1')
var num2 = document.querySelector('#num2')
var resultado = document.querySelector('span')

function soma(){
    resultado.innerHTML = parseFloat(num1.value) + parseFloat(num2.value)
}
