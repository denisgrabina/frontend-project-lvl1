import getRandomInt from "../getRandomInt";
import { runGameEngine, rounds } from "..";

const rules = "What is the result of the expression?\n";

const generateGameData = () => {
	const generateRandomOperator = () => {
		const mathSymbols = ["+", "-", "*"];
		return mathSymbols[Math.floor(Math.random() * Math.floor(3))];
	};

	const calculate = (number1, number2, operator) => {
		let result;
		switch (operator) {
			case "+":
				result = number1 + number2;
				break;
			case "-":
				result = number1 - number2;
				break;
			case "*":
				result = number1 * number2;
				break;
			default:
				result = "Please, use correct math operator";
				break;
		}
		return result;
	};

	const questions = [];
	const answers = [];

	for (let i = 0; i <= rounds; i += 1) {
		const number1 = getRandomInt(1, 100);
		const number2 = getRandomInt(1, 100);
		const operator = generateRandomOperator();

		questions.push(`${number1} ${operator} ${number2}`);
		answers.push(calculate(number1, number2, operator));
	}

	return { questions, answers };
};

export default () => runGameEngine(rules, generateGameData());
