const calculate = require('./calc');
describe('Функціонал калькулятора:', () => {
  test('Додає два числа', () => {
    expect(calculate(5, '+', 3)).toBe(8);
  });

  test('Віднімає два числа', () => {
    expect(calculate(5, '-', 3)).toBe(2);
  });

  test('Множить два числа', () => {
    expect(calculate(5, '*', 3)).toBe(15);
  });

  test('Ділить два числа', () => {
    expect(calculate(6, '/', 3)).toBe(2);
  });

  test('Ділить та повертає остачу', () => {
    expect(calculate(5, '%', 3)).toBe(2);
  });

  test('Ставить одне число у степінь другого', () => {
    expect(calculate(5, '^', 3)).toBe(125);
  });
  test('Повертає помилку, якщо оператор неправильний', () => {
    expect(calculate(5, 'invalid', 3)).toBe('Неправильний оператор!');
  });
});

// Інтеграційні тести
describe('Різні варіації обчислень:', () => {
  test('2 + 2 * 2 = 6', () => {
    expect(calculate(2, '+', calculate(2, '*', 2))).toBe(6);
  });

  test('(2 + 2) * 3 = 12', () => {
    expect(calculate(calculate(2, '+', 2), '*', 3)).toBe(12);
  });

  test('0 / 0 = NaN', () => {
    expect(calculate(0, '/', 0)).toBe(NaN);
  });

  test('5 / 0 = нескінченність', () => {
    expect(calculate(5, '/', 0)).toBe(Infinity);
  });
});