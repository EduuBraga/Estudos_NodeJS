// const calc = require('./calc')
import { calc } from './calc.js';

const { sum, mult, div } = calc;

const args = process.argv.slice(2);

const number1 = Number(args[1]);
const number2 = Number(args[2]);
let result = null;

switch (args[0]) {
  case 's':
    result = sum(number1, number2)
    break;
  case 'm':
    result = mult(number1, number2)
    break;
  case 'd':
    result = div(number1, number2)
    break;
  default:
    result = "Valor não encontrado."
    break;
};

console.log(result);