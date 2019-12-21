export default (n) => {
  const expression = n;
  const answer = n % 2 === 0 ? "yes" : "no";

  return { expression, answer };
};
