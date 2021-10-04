import {appendToScreen, clearScreen, getScreenText, sendToScreen} from "./js/screen.js";

const buttonList = document.getElementsByTagName("button");

for (let i = 0; i < buttonList.length; i++) {
    addClickListenerTo(buttonList[i])
}

let value1 = ""
let value2 = ""
let op = ""
let firstOfSecondLotOfNumbersPressed = false

const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]
const BINARY_OPERATORS = ["x", "-", "/", "+"]
const UNARY_OPERATORS = ["1/x", "+/-"]

/**
 * Adds a click listener to an element which sends its content to the screen when clicked.
 * @param element
 */
function addClickListenerTo(element) {
    console.log("Listening for clicks on " + element.innerText)
    element.addEventListener("click", ClickListener)
}

/**
 * EventListener for all buttons
 */
function ClickListener(event) {
    const button = event.target
    console.log("Button " + button.innerText + " pressed!!")

    const buttonText = button.innerText
    const operatorButtons = document.getElementsByClassName("operators")

    Array.from(operatorButtons).forEach((button) => {
        button.classList.remove("selected")
    })

    if (buttonText === "AC") {
        clearScreen()
        value1 = ""
        value2 = ""
        op = ""
        firstOfSecondLotOfNumbersPressed = false

    } else if (BINARY_OPERATORS.includes(buttonText)) {
        button.classList.add("selected")
        op = buttonText
        value1 = getScreenText()

    } else if (NUMBERS.includes(buttonText)) {
        if (buttonText === "." && getScreenText().includes(".")) {
            return
        }
        if (value1 && firstOfSecondLotOfNumbersPressed === false) {
            clearScreen()
            firstOfSecondLotOfNumbersPressed = true
        }
        if (value2 && !value1) {
            clearScreen()
            value2 = ""
        }


        appendToScreen(buttonText)
    } else if (buttonText === "=") {
        if (value1 && op) {
            value2 = getScreenText()
            const calcInputs = createBinaryObject(value1, op, value2)
            sendToScreen(calcValue(calcInputs))
            value1 = ""
            op = ""
            firstOfSecondLotOfNumbersPressed = false
        }


    } else if (UNARY_OPERATORS.includes(buttonText)) {
        if (buttonText === "+/-") {
            sendToScreen(-Number(getScreenText()))
        } else {
            sendToScreen(1 / Number(getScreenText()))
        }
    }
}


/**
 * Creates an object with 2 values and an operator.
 * @param {string} string1
 * @param {string} op
 * @param {string} string2
 * @return {{ value1: number, value2: number, operator: string}}
 */
const createBinaryObject = (string1, op, string2) => {
    return {value1: Number(string1), operator: op, value2: Number(string2)}
}

/**
 * Given an operation object, perform the calculation and return the result.
 *
 * @param {{value1: number, operator: string, value2: number}} operationObject
 * @return {number} result of operation
 */
const calcValue = (operationObject) => {
    switch (operationObject.operator) {
        case "-":
            return operationObject.value1 - operationObject.value2
        case "x":
            return operationObject.value1 * operationObject.value2
        case "/":
            return operationObject.value1 / operationObject.value2
        case "+":
            return operationObject.value1 + operationObject.value2
    }
}