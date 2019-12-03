import readlineSync from "readline-sync";
import isEven from "./isEven";

const controller = () => {
  let iter = 0;
  let answer = "";
  const numbers = [15, 6, 7];

  const userName = readlineSync.question("May I have your name? ");
  if (!userName) {
    console.log("User Name field couldn't be empty");
    return false;
  }
  console.log(`Hello, ${userName}!\n`);

  while (iter < 3) {
    answer = readlineSync.question(`Question: ${numbers[iter]}\nYour answer: `);
    if (!isEven(numbers[iter]) && answer === "yes") {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
      return false;
    }
    if (isEven(numbers[iter]) && answer === "no") {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
      return false;
    }
    if (
      (isEven(numbers[iter]) && answer === "yes") || (!isEven(numbers[iter]) && answer === "no")
    ) {
      console.log("Correct!");
    } else {
      console.log(`'${answer}', is not correct answer.\n${userName}, please use keyword 'yes' or 'no'.`);
      return false;
    }
    iter += 1;
  }
  console.log(`Congratulations, ${userName}!`);
  return false;
};

export default controller;
