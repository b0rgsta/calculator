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

    element.addEventListener("click", () => {
        console.log("Button " + element.innerText + " pressed!!")
        sendElementToScreen(element)
    })
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
 *  This function appends a new message to the existing message on screen.
 * @param message - The new message being appended to existing message on screen.
 */
function appendToScreen(message) {
    document.getElementById("screen").innerText += message
}

/**
 * This function takes a message and sends it to the screen
 * @param message - The string being passed to screen
 */
function sendToScreen(message) {
    document.getElementById("screen").innerText = message
}

