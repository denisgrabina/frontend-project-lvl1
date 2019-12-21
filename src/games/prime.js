import getRandomInt from "../getRandomInt";
import controller from "..";

const isPrime = n => {
	if (n < 2) return false;
	for (let i = 2; i < n; i += 1) {
		if (n % i === 0) return false;
	}
	return true;
};

const primarize = n => {
	const expression = n;
	const answer = isPrime(n) ? "yes" : "no";

	return { expression, answer };
};

export default () => {
	const rules = "Answer 'yes' if number prime otherwise answer 'no'.\n";
	const data = [];
	for (let i = 0; i < 3; i += 1) {
		data.push(primarize(getRandomInt(30)));
	}

	return controller(rules, data);
};
