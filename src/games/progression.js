import { runGameEngine } from '../cli.js';
import randomInt from '../utils/randomInt.js';

const rules = 'What number is missing in the progression?\n';
const rangeStart = [1, 10];
const rangeStep = [1, 10];
const progressionLength = 10;

const generateProgression = () => {
  const start = randomInt(rangeStart);
  const step = randomInt(rangeStep);

  return Array.from(
    new Array(progressionLength),
    (item, index) => (index + start) * step
  );
};

const generateGameData = () => {
  const progression = generateProgression();
  const hiddenNum = randomInt([0, progressionLength - 1]);
  const formattedProgression = progression.map((item, index) => {
    return index === hiddenNum ? '..' : item
  });
  const question = formattedProgression.join(' ');
  const rightAnswer = progression[hiddenNum].toString();

  return { question, rightAnswer };
};

export default runGameEngine(rules, generateGameData);
