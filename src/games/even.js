import getRandomInt from "../getRandomInt";
import controller from "..";

const isEven = n => {
	const expression = n;
	const answer = n % 2 === 0 ? "yes" : "no";

	return { expression, answer };
};

export default () => {
	const rules = "Answer 'yes' if number even otherwise answer 'no'.\n";
	const data = [];
	for (let i = 0; i < 3; i += 1) {
		data.push(isEven(getRandomInt(100)));
	}

	return controller(rules, data);
};
