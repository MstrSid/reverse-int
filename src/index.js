module.exports = function reverse (n) {
  return +`${n}`.replace(/\D/, '').split("").reverse().join("");
};
