/**
 * This function returns screen to 0.
 */
export function clearScreen() {
    sendToScreen("0")
}

/**
 * This function takes an element and sends its content to the screen
 * @param element - The element
 */
export function appendElementTextToScreen(element) {
    const buttonContent = element.innerText
    appendToScreen(buttonContent)
}

/**
 *  This function appends a new digit to the existing digit on screen replacing 0.
 * @param {string} digit - The new message being appended to existing message on screen.
 */
export function appendToScreen(digit) {
    const screen = document.getElementById("screen")
    if (screen.innerText !== "0") {
        screen.innerText += digit
    } else {
        screen.innerText = digit
    }
}

/**
 * This function takes a message and sends it to the screen
 * @param message - The string being passed to screen
 */
export function sendToScreen(message) {
    document.getElementById("screen").innerText = message
}

/**
 * This function saves the numbers on screen when an operator button is clicked.
 *
 * @return message from screen
 */

export function getScreenText() {
    return document.getElementById("screen").innerText
}