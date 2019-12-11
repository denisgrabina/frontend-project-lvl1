import getRules from "../components/getRules";
import calc from "../controllers/calc";
import getRandomInt from "../components/getRandomInt";
import getRandomSym from "../components/getRandomSym";
import controller from "../controllers/gameLogic";

export default () => {
  const rules = getRules("What is the result of the expression?\n");
  const data = [];
  for (let i = 0; i < 3; i += 1) {
    data.push(calc(getRandomInt(100), getRandomInt(100), getRandomSym()));
  }

  return controller(rules, data);
};
