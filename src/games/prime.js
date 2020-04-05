import getRandomInt from "../getRandomInt";
import { runGameEngine, rounds } from "..";

const isPrime = n => {
	if (n < 2) return false;
	for (let i = 2; i < n; i += 1) {
		if (n % i === 0) return false;
	}
	return true;
};

const rules = "Answer 'yes' if number prime otherwise answer 'no'.\n";

const generateGameData = () => {
	const questions = [];
	const answers = [];

	for (let i = 0; i <= rounds; i += 1) {
		const number = getRandomInt(1, 100);

		questions.push(number);
		answers.push(isPrime(number) ? "yes" : "no");
	}

	return { questions, answers };
};

export default () => runGameEngine(rules, generateGameData());
