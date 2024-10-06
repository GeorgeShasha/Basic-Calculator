const buttons = document.querySelectorAll('button');
const inputField = document.getElementById("results");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        const buttonValue = buttons[i].textContent;

        if(buttonValue === 'C'){
            clearResult();
        } else if(buttonValue === '=') {
            calculateResults();
        }else if(buttonValue === '%') {
            calculatePercentage();
        }else {
            appendValue(buttonValue);
        }
    });
};

function clearResult() {
    inputField.value = '';
};

function calculateResults() {
    inputField.value = eval(inputField.value);
};

function calculatePercentage() {
    inputField.value = inputField.value / 100;
};

function appendValue(buttonValue) {
    inputField.value += buttonValue;
};