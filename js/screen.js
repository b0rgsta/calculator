/**
 * This function returns screen to 0.
 */
export function clearScreen() {
    sendToScreen("0")
}

/**
 *  This function appends a new digit to the existing number on screen OR replaces 0.
 * @param {string} digit - The new message being appended to existing message on screen.
 */
export function appendToScreen(digit) {
    const screen = document.getElementById("screen")
    if (screen.innerText !== "0" || digit === ".") {
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
    console.log(message)
    document.getElementById("screen").innerText = String(message).slice(0,20)
}

/**
 * This function returns the number displayed on screen.
 *
 * @return message from screen
 */
export function getScreenText() {
    return document.getElementById("screen").innerText
}