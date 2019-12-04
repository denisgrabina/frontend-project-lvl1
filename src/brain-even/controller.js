import readlineSync from "readline-sync";
import isEven from "./isEven";

export default (numbers) => {
  const userName = readlineSync.question("May I have your name? ");
  if (!userName) return console.log("User Name field couldn't be empty");
  console.log(`Hello, ${userName}!\n`);

  for (let iter = 0; iter < 3; iter += 1) {
    const answer = readlineSync.question(`Question: ${numbers[iter]}\nYour answer: `);
    if (!isEven(numbers[iter]) && answer === "yes") return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
    if (isEven(numbers[iter]) && answer === "no") return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);

    if ((isEven(numbers[iter]) && answer === "yes") || (!isEven(numbers[iter]) && answer === "no")) {
      console.log("Correct!");
    } else {
      return console.log(`'${answer}', is not correct answer.\n${userName}, please use keyword 'yes' or 'no'.`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
