import {appendToScreen, clearScreen, getScreenText, sendToScreen} from "./screen.js";
import {calculatedValue, createBinaryObject} from "./calculations.js";

//creates an array of buttons
const buttonList = document.getElementsByTagName("button");
//adds click listener to all buttons
for (let i = 0; i < buttonList.length; i++) {
    addClickListenerTo(buttonList[i])
}

let value1 = ""
let value2 = ""
let op = ""
let firstCharOfValue2Entered = false

const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]
const BINARY_OPERATORS = ["x", "-", "/", "+"]
const UNARY_OPERATORS = ["1/x", "+/-"]

/**
 * EventListener for all buttons
 */
function ClickListener({target: button}) {
    console.log(`Button ${button.innerText} pressed!`)

    const buttonText = button.innerText
    const operatorButtons = document.getElementsByClassName("operators")

    Array.from(operatorButtons).forEach((button) => {
        button.classList.remove("selected")
    })
    //when AC clicked, reset all values and return screen to 0
    if (buttonText === "AC") {
        clearScreen()
        value1 = ""
        value2 = ""
        op = ""
        firstCharOfValue2Entered = false
        //when an operator is clicked, activate css and store value1 and op values.
    } else if (BINARY_OPERATORS.includes(buttonText)) {
        button.classList.add("selected")
        op = buttonText
        value1 = getScreenText()
        //when a number or . is clicked:
    } else if (NUMBERS.includes(buttonText)) {
        //checks if screen already contains "." allowing no more than one.
        if (buttonText === "." && getScreenText().includes(".")) {
            return
        }
        //if value 1 is true and firstCharOfValue2 is not yet entered, clear screen
        if (value1 && firstCharOfValue2Entered === false) {
            clearScreen()
            //stops the screen from clearing once first char of second value is entered.
            firstCharOfValue2Entered = true
        }
        //resets calculator to perform a new calculation.
        if (value2 && !value1) {
            clearScreen()
            value2 = ""
        }

        appendToScreen(buttonText)

        //when = is clicked
    } else if (buttonText === "=") {
        //if value1 and op are true => send calc result to screen and reset values. If false do nothing.
        if (value1 && op) {
            value2 = getScreenText()
            const calcInputs = createBinaryObject(value1, op, value2)
            sendToScreen(calculatedValue(calcInputs))
            value1 = ""
            op = ""
            firstCharOfValue2Entered = false
        }

        //when unary operator button is clicked perform math function:
    } else if (UNARY_OPERATORS.includes(buttonText)) {
        if (buttonText === "+/-") {
            sendToScreen(-Number(getScreenText()))
        } else {
            sendToScreen(1 / Number(getScreenText()))
        }
    }
}

/**
 * Adds a click listener to an element.
 * @param element
 */
function addClickListenerTo(element) {
    console.log("Listening for clicks on " + element.innerText)
    element.addEventListener("click", ClickListener)
}
