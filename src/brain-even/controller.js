import readlineSync from "readline-sync";
import getUserName from "../components/getUserName";
import isEven from "./isEven";

let attempts = 0;
let answer = "";
const numbers = [15, 6, 7];

const controller = () => {
  while (attempts < 3) {
    for (let i = 0; i < numbers.length; i += 1) {
      answer = readlineSync.question(`Question: ${numbers[i]}\n Your answer: `);
      attempts += 1;
      if (
        (isEven(numbers[i]) && answer === "yes") || (!isEven(numbers[i]) && answer === "no")
      ) {
        console.log("Correct!");
      } else if (
        (isEven(numbers[i]) && answer === "no") || (!isEven(numbers[i]) && answer === "yes")
      ) {
        return `'yes' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${getUserName}!`;
      }
      return `${answer}, is not correct answer.\n ${getUserName}, please use keyword 'yes' or 'no'.`;
    }
  }
  return `Congratulations, ${getUserName}`;
};

export default controller;
