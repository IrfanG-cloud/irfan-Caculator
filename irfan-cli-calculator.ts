const cal = (num1: number, num2: number, opr: string) => {
  switch (opr) {
    case "add":
      return num1 + num2;
    case "divide":
      return num1 / num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "modulo":
      return num1 % num2;
    default:
      return 0;
  }
};
console.log(cal(15, 5, "divide"));
