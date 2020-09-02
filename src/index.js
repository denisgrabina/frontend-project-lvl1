import readlineSync from "readline-sync";

export const rounds = 3;

export const runGameEngine = (rules, gameData) => {
	console.log("\nWelcome to the Brain Games!");
	console.log(rules);
	const userName = readlineSync.question("May I have your name? ");
	if (!userName) return console.log("User Name field couldn't be empty");
	console.log(`Hello, ${userName}!`);

	for (let iter = 0; iter < rounds; iter += 1) {
		const answer = readlineSync.question(
			`Question: ${gameData.questions[iter]}\nYour answer: `
		);

		if (answer !== String(gameData.answers[iter])) {
			return console.log(
				`'${answer}' is wrong answer ;(. Correct answer was '${gameData.answers[iter]}'.\nLet's try again, ${userName}!`
			);
		}

		if (answer === String(gameData.answers[iter])) {
			console.log("Correct!");
		}
	}

	return console.log(`Congratulations, ${userName}!`);
};
