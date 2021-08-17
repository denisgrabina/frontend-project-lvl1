import { runGameEngine } from '../cli.js';
import randomInt from '../utils/randomInt.js';

const rules = "Answer 'yes' if number prime otherwise answer 'no'.\n";
const range = [1, 100];

const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }

  return n > 1;
};

const generateGameData = () => {
  const question = randomInt(range);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, rightAnswer };
};

export default runGameEngine(rules, generateGameData);
