import getRules from "../components/getRules";
import controller from "../controllers/gameLogic";
import isEven from "../components/isEven";
import getRandomInt from "../components/getRandomInt";
import getRandomSym from "../components/getRandomSym";
import calc from "../components/calc";


export default () => {
  const rules = getRules("What is the result of the expression?\n");
  const data = [];
  const answers = [];
  for (let i = 0; i < 3; i += 1) {
    data.push(calc(getRandomInt(100), getRandomInt(100), getRandomSym()));
  }
  for (let i = 0; i < data.length; i += 1) {
    if (isEven(data[i])) {
      answers.push("yes");
    } else {
      answers.push("no");
    }
  }

  console.log(data);

  return controller(rules, data, answers);
};
