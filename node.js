
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
const buttonEqual = document.querySelector("#equals")
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

//Adds eventListener for each button that adds the value to the textBox
numberList.forEach((button) => {
    button.addEventListener("click", () => {
        blankSpace.textContent += button.textContent + ' ';    
    })
})


//Adds event listener that doesnt allow two different operations at once
operationsList.forEach((op) => {
    op.addEventListener("click", () => {
        if (/[+\-x/]/.test(blankSpace.textContent)) {
            return;
        } else {
            blankSpace.textContent += op.textContent + ' ';
        }
    })
})


//Clear Button event listener
buttonClear.addEventListener("click", () => {
    blankSpace.textContent = '';
})


//Adds an indicator to know what are buttons
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

//Implements the equals and displays
const isFloat = (value) => {
    return Number.isFinite(value) && value % 1 !== 0;
}


buttonEqual.addEventListener("click", () => {
    if (/[+]/.test(blankSpace.textContent)) {
        let equation = blankSpace.textContent.split('+ ')
        equation = equation.map(item => item.replace(/\s+/g, '').trim())
        blankSpace.textContent = ''
        answer = parseInt(equation[0]) + parseInt(equation[1])
        blankSpace.textContent = answer
    }
    else if (/[-]/.test(blankSpace.textContent)) {
        let equation = blankSpace.textContent.split('-')
        equation = equation.map(item => item.replace(/\s+/g, '').trim())
        blankSpace.textContent = ''
        answer = parseInt(equation[0]) - parseInt(equation[1])
        blankSpace.textContent = answer
    }
    else if (/[/]/.test(blankSpace.textContent)) {
        let equation = blankSpace.textContent.split('/')
        equation = equation.map(item => item.replace(/\s+/g, '').trim())
        blankSpace.textContent = ''
        if (parseInt(equation[1]) === 0){
            let answer = 'Error'
            blankSpace.textContent = answer
        } else {
            answer = parseInt(equation[0]) / parseInt(equation[1])  
            if (isFloat(answer)){
                answer = answer.toFixed(9)
            }
            blankSpace.textContent = answer
    } 
        
    }
    else {
        let equation = blankSpace.textContent.split('x')
        equation = equation.map(item => item.replace(/\s+/g, '').trim())
        blankSpace.textContent = ''
        answer = parseInt(equation[0]) * parseInt(equation[1])
        blankSpace.textContent = answer
    }
    
})