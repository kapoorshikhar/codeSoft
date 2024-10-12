let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').innerText = '0';
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') {
        document.getElementById('display').innerText = '0';
    } else {
        document.getElementById('display').innerText = displayValue;
    }
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        document.getElementById('display').innerText = displayValue;
    } catch (error) {
        document.getElementById('display').innerText = 'Error';
        displayValue = '';
    }
}
