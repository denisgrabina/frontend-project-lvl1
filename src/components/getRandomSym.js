export default () => {
  const mathSymbols = ["+", "-", "*"];

  return mathSymbols[Math.floor(Math.random() * Math.floor(2))];
};
