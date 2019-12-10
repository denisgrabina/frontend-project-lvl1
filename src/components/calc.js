export default (n1 = 1, n2 = 2, sym = "+") => {
  switch (sym) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
    default:
      return "Please, use correct math symbol";
  }
};
