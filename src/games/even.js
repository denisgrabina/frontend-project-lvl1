import { runGameEngine } from '../cli.js';
import randomInt from '../utils/randomInt.js';

const rules = "Answer 'yes' if number even otherwise answer 'no'.\n";
const range = [1, 10];

const isEven = (num) => num % 2 === 0;

const generateGameData = () => {
  const question = randomInt(range);
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return { question, rightAnswer };
};

export default runGameEngine(rules, generateGameData);
