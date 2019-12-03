import readlineSync from "readline-sync";
import isEven from "./isEven";

const controller = () => {
  let iter = 0;
  let answer = "";
  const numbers = [15, 6, 7];

  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!\n`);

  while (iter < 3) {
    answer = readlineSync.question(`Question: ${numbers[iter]}\nYour answer: `);
    if (
      (isEven(numbers[iter]) && answer === "yes") || (!isEven(numbers[iter]) && answer === "no")
    ) {
      console.log("Correct!");
    }

    if (!isEven(numbers[iter]) && answer === "yes") {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
    }
    if (isEven(numbers[iter]) && answer === "no") {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
    }
    // return `${answer}, is not correct answer.\n ${userName}, please use keyword 'yes' or 'no'.`;
    iter += 1;
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default controller;
