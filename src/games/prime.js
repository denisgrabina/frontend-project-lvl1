import isPrime from "../components/isPrime";

export default (n) => {
  const expression = n;
  const answer = isPrime(n) ? "yes" : "no";

  return { expression, answer };
};
