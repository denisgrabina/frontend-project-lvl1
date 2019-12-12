import getRandomInt from "./getRandomInt";

export default () => {
  const progressionStart = getRandomInt(100);
  const progression = [progressionStart];

  for (let i = 0; i < 9; i += 1) {
    progression.push(progression[i] + 2);
  }
  return progression;
};
