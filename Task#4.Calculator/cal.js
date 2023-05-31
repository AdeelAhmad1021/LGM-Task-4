let result = document.getElementById('result');

function appendNumber(number) {
  result.value += number;
}

function appendOperator(operator) {
  result.value += operator;
}

function calculateResult() {
  let expression = result.value;

  try {
    let answer = eval(expression);
    result.value = answer;
  } catch (error) {
    result.value = 'Error';
  }
}

function clearResult() {
  result.value = '';
}
