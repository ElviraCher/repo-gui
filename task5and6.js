function sum (a, b) {
  return a + b;
}

function substract (a, b) {
  return a - b;
}

function multiply (a, b) {
  return a * b;
}

function division (a, b) {
  return a / b;
}

function mathOperation(arg1, arg2, operation) {
  let result;

  switch (operation) {
    case 'sum':
      result = sum(arg1, arg2);
      break;
    case 'substract':
      result = substract(arg1, arg2);
      break;
    case 'multiply':
      result = multiply(arg1, arg2);
      break;
    case 'division':
      result = division(arg1, arg2);
      break;
  }

  return result;
}

console.log(mathOperation(2, 3, 'multiply'));

