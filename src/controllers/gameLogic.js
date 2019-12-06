import readlineSync from "readline-sync";
import greetingUser from "../components/greetingUser";
import getUserName from "../components/getUserName";

const greetings = greetingUser();
export default (rules, data, answers) => {
  console.log(greetings);
  console.log(rules);
  const userName = getUserName();
  if (!userName) return console.log("User Name field couldn't be empty");
  console.log(`Hello, ${userName}!`);

  for (let iter = 0; iter < 3; iter += 1) {
    const answer = readlineSync.question(`Question: ${data[iter]}\nYour answer: `);

    if (answer !== answers[iter]) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was ${answers[iter]}.\nLet's try again, ${userName}!`);
    }
    if (answer === answers[iter]) {
      console.log("Correct!");
    } else {
      return console.log(`'${answer}', is not correct answer.\n${userName}, please use keyword 'yes' or 'no'.`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
