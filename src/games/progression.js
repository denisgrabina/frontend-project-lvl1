import generateProgression from "../components/generateProgression";

export default (n) => {
  const progression = generateProgression();
  const answer = progression[n];
  progression[n] = "..";
  const expression = progression.join(" ");

  return { expression, answer };
};
