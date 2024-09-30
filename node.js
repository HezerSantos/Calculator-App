const operate = (operator, numberOne, numberTwo) => {
    return operator(numberOne, numberTwo);
}

const buttonOne = document.querySelector("#one")
const buttonTwo = document.querySelector("#two")
const buttonThree = document.querySelector("#three")
const buttonFour = document.querySelector("#four")
const buttonFive = document.querySelector("#five")
const buttonSix = document.querySelector("#six")
const buttonSeven = document.querySelector("#seven")
const buttonEight = document.querySelector("#eight")
const buttonNine = document.querySelector("#nine")
const buttonZero = document.querySelector("#zero")
const buttonDivide = document.querySelector("#divide")
const buttonMultiply = document.querySelector("#multiply")
const buttonSubtract = document.querySelector("#subtract")
const buttonAdd = document.querySelector("#add")
const buttonEqual = document.querySelector("#equal")
const buttonClear = document.querySelector("#clear")

numberList = [
                  buttonOne, buttonTwo, 
                  buttonThree, buttonFour,
                  buttonFive, buttonSix,
                  buttonSeven, buttonEight,
                  buttonNine, buttonZero         
                 ]

operationsList = [
                  buttonDivide, buttonMultiply,
                  buttonSubtract, buttonAdd
                 ]

const blankSpace = document.querySelector("#text");


numberList.forEach((button) => {
    button.addEventListener("click", () => {
        blankSpace.textContent += button.textContent;    
    })
})

operationsList.forEach((op) => {
    op.addEventListener("click", () => {
        if (blankSpace.textContent = )
    })
})

buttonClear.addEventListener("click", () => {
    blankSpace.textContent = '';
})


const buttons = document.querySelectorAll("#buttonContainer button")

buttons.forEach((button) => {
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = 'lightblue'
    })
})

buttons.forEach((button) => {
    button.addEventListener("mouseleave", () => {
        button.style.backgroundColor = ''
    })
})