import getRandomInt from "../getRandomInt";
import { runGameEngine, rounds } from "..";

const generateProgression = (start, length = 10, difference) => {
	for (let i = 0; i < length; i += 1) {
		start.push(start[i] + difference);
	}
	return start;
};

const progressionLength = 10;

const rules = "What number is missing in the progression?\n";

const generateGameData = () => {
	const questions = [];
	const answers = [];

	for (let i = 0; i < rounds; i += 1) {
		const progressionStart = [getRandomInt(1, 100)];
		const progressionDifference = getRandomInt(1, 10);
		const progressionGuessNumber = getRandomInt(1, progressionLength);
		const progression = generateProgression(
			progressionStart,
			progressionLength,
			progressionDifference
		);

		answers.push(progression[progressionGuessNumber]);
		progression.splice(progressionGuessNumber, 1, "..");
		questions.push(progression.join(" "));
	}

	return { questions, answers };
};

export default () => runGameEngine(rules, generateGameData());
