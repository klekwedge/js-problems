/**
 * С числами Фибоначчи мы уже познакомились в прошлой задаче.
 *
 * Напишите функцию isFibonacci(value) которая определяет, является ли value числом Фибоначчи.
 *
 * Пример:
 *
 * isFibonacci(1) === 1
 * isFibonacci(2) === 3
 * isFibonacci(55) === 10
 * isFibonacci(52) === undefined
 *
 * @param {number} value
 * @returns {undefined|number}
 */
function isFibonacci(value) {
  if (value === 1) {
    return 1;
  } else if (value === 0) {
    return 0;
  }

  let past = 1;
  let prev = 1;
  let count = 3;

  let fiboValue = 2;

  for (let i = 0; fiboValue < value; i++) {
    [past, prev] = [prev, past + prev];
    fiboValue = past + prev;
    count++;
  }

  return fiboValue === value ? count : undefined;
}

module.exports = isFibonacci;
