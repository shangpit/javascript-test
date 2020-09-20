function sumOfAllDigitsIsOddOrsumOfAllDigitsIsEven(num) {
    const arrayOfDigits = Array.from(String(num), Number);
    const sumOfAllDigits = arrayOfDigits.reduce((a, b) => a + b, 0);
    if (sumOfAllDigits % 2 === 0) {
        return 'sumOfAllDigitsIsEven'
    }
    return 'sumOfAllDigitsIsOdd';;
}

module.exports = sumOfAllDigitsIsOddOrsumOfAllDigitsIsEven;