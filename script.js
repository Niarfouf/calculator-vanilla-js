let firstNumber
let secondNumber
let operator
let display = 0
let memory
let displayControl = 0

const displayDiv = document.querySelector(".display")
const numberButtons = document.querySelectorAll(".number")
const operatorButtons = document.querySelectorAll(".operator")
const resultButton = document.querySelector(".result")
const clearButton = document.querySelector(".clear")
const undoButton = document.querySelector(".undo")
const decimalButton = document.querySelector(".decimal")
const memoryDiv = document.querySelector(".memory")


document.addEventListener('keydown', function(e){
    numberButtons.forEach(button => {
        if (e.key == button.value) {
            button.click()
        }
    })
    operatorButtons.forEach(button => {
        if (e.key == button.value) {
            button.click()
        }
    })
    if (e.key == "Backspace") {
        undoButton.click()
    }
    if (e.key == ".") {
        decimalButton.click()
    }
    if (e.key == "Enter") {
        resultButton.click()
    }
    if (e.key == "Delete") {
        clearButton.click()
    }
  })

decimalButton.addEventListener("click", function() {
    let displayString = displayDiv.textContent
    if (displayString.indexOf(".") === -1) {
        displayString += "."
        displayDiv.textContent = displayString
        display = displayString
        displayControl = 0 

    }
})

undoButton.addEventListener("click", function() { 
    let displayArray = displayDiv.textContent.split("")
    displayArray.splice(displayArray.length - 1, 1)
    display = displayArray.join("")
    displayDiv.textContent = display
})
clearButton.addEventListener("click", function() {
    firstNumber = ""
    secondNumber = ""
    operator = ""
    display = 0
    displayControl = 0
    memory = ""
    memoryDiv.textContent = memory
    displayDiv.textContent = display
})

numberButtons.forEach(button => {
    button.addEventListener("click", function() {
        if (displayControl) {
            display = 0
            displayControl = 0  
        }
        display += button.value
        display = Number(display)
        displayDiv.textContent = display
    })
})

operatorButtons.forEach(button => {
    button.addEventListener("click", function() {
        if (operator) {
            secondNumber = Number(display)
            display = operate(firstNumber, secondNumber, operator)
            display = Math.round(display * 100000) / 100000
            if (display === Infinity) {
                displayDiv.textContent = "You fool?"
            }
            else {
                displayDiv.textContent = display
            }       
        } 
        firstNumber = Number(display)
        operator = button.value
        memory = display + operator
        memoryDiv.textContent = memory
        displayControl = 1
    })
})

resultButton.addEventListener("click", function() {
    if (operator) {
        secondNumber = Number(display)
        memory += display
        display = operate(firstNumber, secondNumber, operator)
        display = Math.round(display * 100000) / 100000
        operator = ""
        if (display === Infinity) {
            displayDiv.textContent = "You fool?"
        }
        else {
            displayDiv.textContent = display
        }
        memoryDiv.textContent = memory
    } 
    displayControl = 1
})

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

