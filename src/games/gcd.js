export default (n1, n2) => {
  const gcd = (a, b) => {
    if (!b) return a;
    return gcd(b, a % b);
  };
  const expression = `${n1} ${n2}`;
  const answer = gcd(n1, n2);
  return { expression, answer };
};
