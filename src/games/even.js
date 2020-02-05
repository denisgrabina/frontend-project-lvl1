import getRandomInt from "../getRandomInt";
import controller from "..";

const isEven = n => n % 2 ? true : false;
const result = expression => isEven(expression) ? "yes" : "no";

export default () => {
	const rules = "Answer 'yes' if number even otherwise answer 'no'.\n";
	const data = [];
	for (let i = 0; i < 3; i += 1) {
		data.push(result(isEven(getRandomInt(100))));
	}

	return controller(rules, data);
};
