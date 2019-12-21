import readlineSync from "readline-sync";

export default (rules, data) => {
	console.log("\nWelcome to the Brain Games!");
	console.log(rules);
	const userName = readlineSync.question("May I have your name? ");
	if (!userName) return console.log("User Name field couldn't be empty");
	console.log(`Hello, ${userName}!`);

	for (let iter = 0; iter < 3; iter += 1) {
		const answer = readlineSync.question(
			`Question: ${data[iter].expression}\nYour answer: `
		);
		if (answer !== String(data[iter].answer)) {
			return console.log(
				`'${answer}' is wrong answer ;(. Correct answer was '${data[iter].answer}'.\nLet's try again, ${userName}!`
			);
		}
		if (answer === String(data[iter].answer)) {
			console.log("Correct!");
		}
	}
	return console.log(`Congratulations, ${userName}!`);
};
