let firstNumber
let secondNumber
let operator
let display
const displayDiv = document.querySelector(".display")
const buttonsNumber = document.querySelectorAll(".number")
const buttonsOperator = document.querySelectorAll(".operator")
const buttonResult = document.querySelector(".result")
const buttonClear = document.querySelector(".clear")

function add(x, y) {
    return x + y
}

function subtract(x, y) {
    return x - y
}

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    return x / y
}

function operate(x, y, operator) {
    let result
    switch (operator) {
        case "+":
            result = add(x, y)
            break
        case "-":
            result = subtract(x, y)
            break
        case "*":
            result = multiply(x, y)
            break
        case "/":
            result = divide(x, y)
            break
    }
    return result
}