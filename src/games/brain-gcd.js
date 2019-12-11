import getRules from "../components/getRules";
import gcd from "../components/gcd";
import getRandomInt from "../components/getRandomInt";
import controller from "../controllers/gameLogic";

export default () => {
  const rules = getRules("Find the greatest common divisor of given numbers.\n");
  const data = [];
  for (let i = 0; i < 3; i += 1) {
    data.push(gcd(getRandomInt(100), getRandomInt(100)));
  }

  return controller(rules, data);
};
