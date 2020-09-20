function findTheLowerCaseWOrd(str) {
  return [...str]
    .filter(letter => letter.toUpperCase() !== letter)
    .join('');
}

module.exports = findTheLowerCaseWOrd;