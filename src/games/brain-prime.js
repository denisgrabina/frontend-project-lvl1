import getRules from "../components/getRules";
import prime from "../controllers/prime";
import getRandomInt from "../components/getRandomInt";
import controller from "../controllers/gameLogic";

export default () => {
  const rules = getRules("Answer 'yes' if number prime otherwise answer 'no'\n");
  const data = [];
  for (let i = 0; i < 3; i += 1) {
    data.push(prime(getRandomInt(30)));
  }
  console.log(data);

  return controller(rules, data);
};
