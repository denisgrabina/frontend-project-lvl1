import runGameEngine from "..";
import getRandomInt from "../utils/getRandomInt";

const rules = "Answer 'yes' if number prime otherwise answer 'no'.\n";
const range = [1, 100];

const isPrime = n => {
	for (let i = 2; i < n; i += 1) {
		if (n % i === 0) return false;
	}
	
	return n > 1;
};

const generateGameData = () => {
	const question = getRandomInt(range);
	const rightAnswer = isPrime(question) ? "yes" : "no";

	return { question, rightAnswer };
};

export default runGameEngine(rules, generateGameData);
