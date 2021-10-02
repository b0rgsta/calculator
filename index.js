const buttonList = document.getElementsByTagName("button");

for (let i = 0; i < buttonList.length; i++) {
    addClickListenerTo(buttonList[i])
}

/**
 * This function adds a click listener to an element which sends it to the screen when clicked.
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

    if (button.innerText === "AC") {
        clearScreen()
    } else {
        sendElementToScreen(button)
    }
}

/**
 * This function returns screen to 0.
 */
function clearScreen() {
    sendToScreen("0")
}

/**
 * This function takes an element and sends its content to the screen
 * @param element - The element
 */
function sendElementToScreen(element) {
    const buttonContent = element.innerText
    appendToScreen(buttonContent)
}

/**
 *  This function appends a new digit to the existing digit on screen replacing 0.
 * @param {string} digit - The new message being appended to existing message on screen.
 */
function appendToScreen(digit) {
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
function sendToScreen(message) {
    document.getElementById("screen").innerText = message
}

