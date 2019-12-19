import getRules from "../components/getRules";
import progression from "../controllers/progression";
import getRandomInt from "../components/getRandomInt";
import controller from "../controllers/gameLogic";

export default () => {
	const rules = getRules("What number is missing in the progression?\n");
	const data = [];
	for (let i = 0; i < 3; i += 1) {
		data.push(progression(getRandomInt(10)));
	}

	return controller(rules, data);
};
