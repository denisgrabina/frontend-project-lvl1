import greetingUser from "./components/greetingUser";
import getUserName from "./components/getUserName";

const greetings = greetingUser();

export default () => {
  console.log(greetings);
  const userName = getUserName();
  if (!userName) return console.log("User Name field couldn't be empty");
  return console.log(`Hello, ${userName}!`);
};
