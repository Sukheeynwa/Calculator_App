const expressionDisplay = document.getElementById('display');
const outputDisplay = document.getElementById('result');

const btnAdd = document.getElementById('btnAdd');
const btnSubtract = document.getElementById('btnSubtract');
const btnMultiply = document.getElementById('btnMultiply');
const btnDivide = document.getElementById('btnDivide');
const btnAssignment = document.getElementById('btnAssignment');
const btnClear = document.getElementById('btnClear');

let previousNum = '';
let currentNum = '';
let operator = '';
let justEvaluated = false;

for (let i = 0; i <= 9; i++) {
    const button = document.getElementById(`btn${i}`);
    button.addEventListener('click', () => {
        if (justEvaluated) {
            currentNum = '';
            expressionDisplay.textContent = '';
            outputDisplay.textContent = ''
            justEvaluated = false;
        }
        currentNum += i;
        outputDisplay.textContent = currentNum;
        expressionDisplay.textContent += i;
    })
};

const operate = function(a, b, op) {
    let result = ''

    if (op === '+') {
        result = a + b;
    } else if (op === '-') {
        result = a - b;
    } else if (op === '*') {
        result = a * b;
    } else if (op === '/') {
        if (b === 0) {
            result = 'Cant divide by 0'
        } else {
            result = a / b;
        }
    }

    outputDisplay.textContent = result;
    return result;
};

const setOperator = function(op) {
    if (currentNum === '') {
        operator = op;
        expressionDisplay.textContent = `${previousNum} ${operator} `;
        return;
    }

    previousNum = currentNum;
    operator = op;
    expressionDisplay.textContent = `${previousNum} ${operator} `;
    currentNum = '';
};

const clearCalculator = function(op) {
    previousNum = '';
    currentNum = '';
    operator = '';
    justEvaluated = false;
    expressionDisplay.textContent = '';
    outputDisplay.textContent = '';
}

btnAdd.addEventListener('click', () => setOperator('+'));
btnSubtract.addEventListener('click', () => setOperator('-'));
btnMultiply.addEventListener('click', () => setOperator('*'));
btnDivide.addEventListener('click', () => setOperator('/'));
btnClear.addEventListener('click', clearCalculator);
btnAssignment.addEventListener('click', () => {
    operate(Number(previousNum), Number(currentNum), operator);
    currentNum = outputDisplay.textContent;
    expressionDisplay.textContent += ` = `;
    justEvaluated = true;
});
