
/**
 * returns an object with 2 number values and an operator.
 * @param {string} string1
 * @param {string} op
 * @param {string} string2
 * @return {{ value1: number, value2: number, operator: string}}
 */
export const createBinaryObject = (string1, op, string2) => {
    return {value1: Number(string1), operator: op, value2: Number(string2)}
}

/**
 * Given an operation object, performs the calculation and returns the result.
 *
 * @param {{value1: number, operator: string, value2: number}} operationObject
 * @return {number} result of operation
 */
export const calculatedValue = (operationObject) => {
    //turns the operator string into working math operator.
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