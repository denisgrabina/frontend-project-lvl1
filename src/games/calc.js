import { runGameEngine } from '../cli.js';
import randomInt from '../utils/randomInt.js';

const rules = 'What is the result of the expression?\n';
const range = [1, 10];

const generateRandomOperator = () => {
  const mathSymbols = ['+', '-', '*'];

  return mathSymbols[randomInt([0, mathSymbols.length - 1])];
};

const calculate = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = 'Please, use correct math operator';
      break;
  }
  return result;
};

const generateGameData = () => {
  const num1 = randomInt(range);
  const num2 = randomInt(range);
  const operator = generateRandomOperator();
  const question = `${num1} ${operator} ${num2}`;
  const rightAnswer = calculate(num1, num2, operator).toString();

  return { question, rightAnswer };
};

export default runGameEngine(rules, generateGameData);
