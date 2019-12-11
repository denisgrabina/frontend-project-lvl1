export default (n1 = 1, n2 = 2, sym = "+") => {
  const expression = `${n1} ${sym} ${n2}`;
  let answer;
  switch (sym) {
    case "+":
      answer = n1 + n2;
      break;
    case "-":
      answer = n1 - n2;
      break;
    case "*":
      answer = n1 * n2;
      break;
    default:
      answer = "Please, use correct math symbol";
      break;
  }

  return { expression, answer };
};
