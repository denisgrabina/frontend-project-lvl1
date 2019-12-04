import readlineSync from "readline-sync";
import isEven from "./isEven";

export default (numbers) => {
  let iter = 0;

  const userName = readlineSync.question("May I have your name? ");
  if (!userName) return console.log("User Name field couldn't be empty");
  console.log(`Hello, ${userName}!\n`);

  while (iter < 3) {
    const answer = readlineSync.question(`Question: ${numbers[iter]}\nYour answer: `);
    if (!isEven(numbers[iter]) && answer === "yes") return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);

    if (isEven(numbers[iter]) && answer === "no") return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);

    if ((isEven(numbers[iter]) && answer === "yes") || (!isEven(numbers[iter]) && answer === "no")) {
      console.log("Correct!");
    } else {
      return console.log(`'${answer}', is not correct answer.\n${userName}, please use keyword 'yes' or 'no'.`);
    }
    iter += 1;
  }
  return console.log(`Congratulations, ${userName}!`);
};
