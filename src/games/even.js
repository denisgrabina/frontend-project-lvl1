import runGameEngine from "..";
import getRandomInt from "../utils/getRandomInt";

const rules = "Answer 'yes' if number even otherwise answer 'no'.\n";
const range = [1, 10];

const isEven = num => num % 2 === 0;

const generateGameData = () => {
  const question = getRandomInt(range);
  const rightAnswer = isEven(question) ? "yes" : "no";

  return { question, rightAnswer };
};

export default runGameEngine(rules, generateGameData);
