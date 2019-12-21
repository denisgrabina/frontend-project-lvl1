import getRandomInt from "../getRandomInt";
import controller from "..";

const generateProgression = () => {
	const progressionStart = getRandomInt(100);
	const progression = [progressionStart];

	for (let i = 0; i < 9; i += 1) {
		progression.push(progression[i] + 2);
	}
	return progression;
};

const getProgression = n => {
	const progression = generateProgression();
	const answer = progression[n];
	progression[n] = "..";
	const expression = progression.join(" ");

	return { expression, answer };
};

export default () => {
	const rules = "What number is missing in the progression?\n";
	const data = [];
	for (let i = 0; i < 3; i += 1) {
		data.push(getProgression(getRandomInt(10)));
	}

	return controller(rules, data);
};
