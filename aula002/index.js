// const calc = require('./calc.js');
// const { sum, mult, div, sub } = calc;

const sub = require('./calc.js').sub;
const sum = require('./calc.js').sum;
const mult = require('./calc.js').mult;
const div = require('./calc.js').div;

const args = process.argv.slice(2);

const number1 = Number(args[1]);
const number2 = Number(args[2]);
let result = null;

switch (args[0]) {
  case 'sum':
    result = sum(number1, number2)
    break;
  case 'mul':
    result = mult(number1, number2)
    break;
  case 'div':
    result = div(number1, number2)
    break;
  case 'sub':
    result = sub(number1, number2)
    break;
  default:
    result = "Valor não encontrado."
    break;
};

console.log(result);