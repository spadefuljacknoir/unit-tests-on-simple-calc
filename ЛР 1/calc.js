function calculate(num1, operator, num2) {
  let result;

  switch(operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "%":
      result = num1 % num2;
      break;
    case "^":
      result = Math.pow(num1, num2);
      break;
    default:
      result = "Неправильний оператор!";
  }

  return result;
}

// Приклад виклику функції
let result = calculate(5, "+", 3);
console.log(result); // Виведе 8

module.exports = calculate;