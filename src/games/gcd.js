import getRandomInt from "../getRandomInt";
import { runGameEngine, rounds } from "..";

const getGreatCommonDivisor = (number1, number2) => {
	if (!number2) return number1;
	return getGreatCommonDivisor(number2, number1 % number2);
};

const rules = "Find the greatest common divisor of given numbers.\n";

const generateGameData = () => {
	const questions = [];
	const answers = [];

	for (let i = 0; i <= rounds; i += 1) {
		const number1 = getRandomInt(1, 100);
		const number2 = getRandomInt(1, 100);

		questions.push(`${number1} ${number2}`);
		answers.push(getGreatCommonDivisor(number1, number2));
	}

	return { questions, answers };
};

export default () => runGameEngine(rules, generateGameData());
