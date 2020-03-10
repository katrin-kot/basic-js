module.exports = repeater;
function repeater(str, options) {
  const {
    separator = '+',
    addition = '',
    additionSeparator = '|',
    additionRepeatTimes = 1,
    repeatTimes = 1
  } = options;

  const finalAddition = addition !== ''
    ? repeater(addition, {
        repeatTimes: additionRepeatTimes,
        separator: additionSeparator,
      })
    : '';
  const arr = Array.from({ length: repeatTimes }, () => `${str}${finalAddition}`);
  return arr.join(separator);
}
