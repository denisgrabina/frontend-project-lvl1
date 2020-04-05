import getRandomInt from "../getRandomInt";
import { runGameEngine, rounds } from "..";

const isEven = number => {
	if (number % 2 === 0) {
		return true;
	}
	return false;
}

const rules = "Answer 'yes' if number even otherwise answer 'no'.\n";

const generateGameData = () => {
	const questions = [];
	const answers = [];

	for (let i = 0; i < rounds; i += 1) {
		const number = getRandomInt(1, 100);

		questions.push(number);
		answers.push(isEven(number) ? "yes" : "no");
	}

	return { questions, answers };
};

export default () => runGameEngine(rules, generateGameData());
