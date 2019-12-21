import even from "../controllers/even";
import getRandomInt from "../components/getRandomInt";
import controller from "..";

export default () => {
	const rules = "Answer 'yes' if number even otherwise answer 'no'.\n";
	const data = [];
	for (let i = 0; i < 3; i += 1) {
		data.push(even(getRandomInt(100)));
	}

	return controller(rules, data);
};
