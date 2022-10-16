/**
 * Пароль называется криптостойким,
 * если он включает в себя хотя бы одну строчную английскую букву,
 * хотя бы одну заглавную английскую букву и хотя бы одну цифру,
 * при этом его длина должна быть не менее 7 символов.
 *
 * Напишите функцию validatePassword(password) определяющую,
 * является ли переданный пароль криптостойким.
 *
 * Пример:
 *
 * validatePassword('abc4DEFG') === true
 * validatePassword('abcdefg') === false
 * validatePassword('abcdefG') === false
 * validatePassword('abcdef7') === false
 *
 * @param {string} password
 * @returns {boolean}
 */
function validatePassword(password) {
  let capital, lowercase, length, number;
  capital = false;
  lowercase = false;
  length = password.length >= 7 ? true : false;
  number = false;

  for (let i = 0; i < password.length; i++) {
    const element = password[i];
    if (element.charCodeAt(0) >= 65 && element.charCodeAt(0) <= 90) {
      capital = true;
    } else if (element.charCodeAt(0) >= 97 && element.charCodeAt(0) <= 122) {
      lowercase = true;
    } else if (element.charCodeAt(0) >= 48 && element.charCodeAt(0) <= 57) {
      number = true;
    }
  }

  return capital && lowercase && length && number;
}

module.exports = validatePassword;
