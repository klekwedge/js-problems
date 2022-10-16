/**
 * Напишите функцию getPower(n) возвращающую целочисленное значение степени >= 0,
 * в которую нужно возвести двойку, чтобы получить n
 *
 * Пример:
 *
 * getPower(2) === 1            # 2^1 = 2
 * getPower(3) === undefined
 * getPower(256) === 8          # 2^8 = 256
 *
 * @param {number} n
 * @returns {number|undefined}
 */
function getPower(n) {
  let counter = 0;
  while (n > 1) {
    n /= 2;

    if (n % 2 === 0 || n === 1) {
      counter++;
    } else {
      return undefined;
    }
  }

  return counter;
}

module.exports = getPower;
