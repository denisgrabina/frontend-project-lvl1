import readlineSync from 'readline-sync';

const rounds = 3;

export const greetings = () => {
  const name = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${name}!`);
};

export const runGameEngine = (rules, gameData) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(rules);

  const userName = readlineSync.question('May I have your name? ');
  if (!userName) return console.log("User Name field couldn't be empty");

  console.log(`Hello, ${userName}!`);

  for (let iter = 0; iter < rounds; iter += 1) {
    const { question, rightAnswer } = gameData();
    const answer = readlineSync.question(
      `Question: ${question}\nYour answer: `
    );

    if (answer !== rightAnswer) {
      return console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`
      );
    }

    if (answer === rightAnswer) {
      console.log('Correct!');
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};
