import getRandomInt from "../getRandomInt";
import controller from "..";

const getGreatCommonDivisor = (n1, n2) => {
	const gcd = (a, b) => {
		if (!b) return a;
		return gcd(b, a % b);
	};
	const expression = `${n1} ${n2}`;
	const answer = gcd(n1, n2);
	return { expression, answer };
};

export default () => {
	const rules = "Find the greatest common divisor of given numbers.\n";
	const data = [];
	for (let i = 0; i < 3; i += 1) {
		data.push(getGreatCommonDivisor(getRandomInt(100), getRandomInt(100)));
	}

	return controller(rules, data);
};
