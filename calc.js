var selectedInput = 'calcInput1';

function onInputEntered(input1) {
    console.log(`calling onInputEntered(${input1})`);
    var output = document.getElementById(selectedInput);
    output.value += input1;
}

function onOperatorEntered(operator) {
    var input = document.getElementById('calcOperator');
    input.value = operator;
    selectedInput = 'calcInput2';
}

function onCalculate() {
    console.log('calling onCalculate()')
    var input1 = document.getElementById('calcInput1').value;
    var input2 = document.getElementById('calcInput2').value;
    var operator = document.getElementById('calcOperator').value;
    var result = '';
    var number1 = parseFloat(input1);
    var number2 = parseFloat(input2);

    if (operator === '+') {
        result = number1 + number2;
    }

    else if (operator === '-') {
        result = number1 - number2;
    }

    else if (operator === '×') {
        result = number1 * number2;
    }

    else if (operator === '÷') {
        result = number1 / number2;
    }

    document.getElementById('calcOutput').value = result;

}

function onClear() {
    document.getElementById('calcInput1').value = "";
    document.getElementById('calcInput2').value = "";
    document.getElementById('calcOperator').value = "";
    document.getElementById('calcOutput').value = "";
    selectedInput = 'calcInput1';
}

function onDelete() {
    var value = document.getElementById(selectedInput).value;
    document.getElementById(selectedInput).value = value.slice(0, -1);
    document.getElementById('calcOutput').value = "";
}
