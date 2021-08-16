import { runGameEngine } from '../cli.js';
import randomInt from '../utils/randomInt.js';

const rules = 'Find the greatest common divisor of given nums.\n';
const range = [0, 10];

const getGreatCommonDivisor = (num1, num2) => {
  if (!num2) return num1;

  return getGreatCommonDivisor(num2, num1 % num2);
};

const generateGameData = () => {
  const num1 = randomInt(range);
  const num2 = randomInt(range);
  const question = `${num1} ${num2}`;
  const rightAnswer = getGreatCommonDivisor(num1, num2).toString();

  return { question, rightAnswer };
};

export default runGameEngine(rules, generateGameData);
