import gcd from "../controllers/gcd";
import getRandomInt from "../components/getRandomInt";
import controller from "..";

export default () => {
	const rules = "Find the greatest common divisor of given numbers.\n";
	const data = [];
	for (let i = 0; i < 3; i += 1) {
		data.push(gcd(getRandomInt(100), getRandomInt(100)));
	}

	return controller(rules, data);
};
