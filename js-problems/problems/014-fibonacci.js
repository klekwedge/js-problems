/**
 * Последовательностью Фибоначчи называется последовательность чисел
 * a0, a1, ..., an, ..., где
 * a0 = 0,
 * a1 = 1,
 * ak = ak-1 + ak-2 (k > 1).
 *
 * Напишите функцию fibonacci(n) вычисляющую n-ное число последовательности
 *
 * Пример:
 *
 * fibonacci(2) === 1
 * fibonacci(3) === 2
 * fibonacci(7) === 13
 *
 * @param {number} n >= 0
 * @returns {number}
 */
function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  } else if (n === 0) {
    return 0;
  }

  let past = 1;
  let prev = 1;

  for (let i = 0; i < n - 3; i++) {
    [past, prev] = [prev, past + prev];
  }

  return past + prev;
}

module.exports = fibonacci;
