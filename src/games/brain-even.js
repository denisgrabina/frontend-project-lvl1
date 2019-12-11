import getRules from "../components/getRules";
import isEven from "../components/isEven";
import getRandomInt from "../components/getRandomInt";
import controller from "../controllers/gameLogic";

export default () => {
  const rules = getRules("Answer 'yes' if number even otherwise answer 'no'\n");
  const data = [];
  for (let i = 0; i < 3; i += 1) {
    data.push(isEven(getRandomInt(100)));
  }

  return controller(rules, data);
};
