import runGameEngine from "..";
import getRandomInt from "../utils/getRandomInt";

const rules = "What number is missing in the progression?\n";
const rangeStart = [1, 10];
const rangeStep = [1, 10];
const progressionLength = 10;

const generateProgression = () => {
	const start = getRandomInt(rangeStart);
	const step = getRandomInt(rangeStep);
	
	return Array.from(
		new Array(progressionLength),
		(item, index) => (index + start) * step);
};

const generateGameData = () => {
	const progression = generateProgression();
	const hiddenNum = getRandomInt([0, progressionLength - 1]);
	const formattedProgression = progression.map((item, index) =>
		index === hiddenNum ? ".." : item
	);
	const question = formattedProgression.join(" ");
	const rightAnswer = progression[hiddenNum].toString();

	return { question, rightAnswer };
};

export default runGameEngine(rules, generateGameData);
