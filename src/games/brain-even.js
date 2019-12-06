import getRules from "../components/getRules";
import controller from "../controllers/gameLogic";
import isEven from "../components/isEven";
import getRandomInt from "../components/getRandomInt";

export default () => {
  const rules = getRules("Answer 'yes' if number even otherwise answer 'no'\n");
  const data = [];
  const answers = [];
  for (let i = 0; i < 3; i += 1) {
    data.push(getRandomInt(100));
  }
  for (let i = 0; i < data.length; i += 1) {
    if (isEven(data[i])) {
      answers.push("yes");
    } else {
      answers.push("no");
    }
  }

  return controller(rules, data, answers);
};
