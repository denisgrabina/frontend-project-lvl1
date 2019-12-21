import getRandomInt from "../getRandomInt";
import controller from "..";

const getRandomSym = () => {
	const mathSymbols = ["+", "-", "*"];
	return mathSymbols[Math.floor(Math.random() * Math.floor(3))];
};

const calculate = (n1 = 1, n2 = 2, sym = "+") => {
	const expression = `${n1} ${sym} ${n2}`;
	let answer;
	switch (sym) {
		case "+":
			answer = n1 + n2;
			break;
		case "-":
			answer = n1 - n2;
			break;
		case "*":
			answer = n1 * n2;
			break;
		default:
			answer = "Please, use correct math symbol";
			break;
	}
	return { expression, answer };
};

export default () => {
	const rules = "What is the result of the expression?\n";

	const data = [];
	for (let i = 0; i < 3; i += 1) {
		data.push(calculate(getRandomInt(100), getRandomInt(100), getRandomSym()));
	}

	controller(rules, data);
};
