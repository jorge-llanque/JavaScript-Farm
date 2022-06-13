const {
  isOddOrEven,
  isPalindrome,
  convertToUpper,
  sumTwoSmallestNumbers,
  last2EvenNUmbers,
} = require("./dump-exercises.js");

describe("isOddOrEven(number)", () => {
  it("Should validate if the number is Odd or Even", () => {
    expect(isOddOrEven("222")).toBe("Is not a valid number");
    expect(isOddOrEven(0.1111)).toBe("Is not a valid number");
    expect(isOddOrEven(1)).toBe("Is Odd number");
    expect(isOddOrEven(2)).toBe("Is Even number");
  });
});

describe("isPalindrome(string)", () => {
  it("Should return a string", () => {
    expect(isPalindrome(undefined)).toMatch(/is not a valid word/);
    expect(isPalindrome("hannah")).toMatch(/is palindrome/);
    expect(isPalindrome("asdfawf")).toMatch(/is not a palindrome/);
  });
});

describe("convertToUpper(string)", () => {
  it("Should return same word to Upper format", () => {
    expect(convertToUpper("")).toBeFalsy();
    expect(convertToUpper(undefined)).toBeNull();
    expect(convertToUpper("abd")).toMatch(/ABD/);
  });
});

describe("sumTwoSmallestNumbers([])", () => {
  it("Should work for basic tests", () => {
    expect(sumTwoSmallestNumbers([5, 8, 12, 19, 22])).toEqual(13);
    expect(sumTwoSmallestNumbers([15, 28, 4, 2, 43])).toEqual(6);
    expect(sumTwoSmallestNumbers([3, 87, 45, 12, 7])).toEqual(10);
    expect(sumTwoSmallestNumbers([23, 71, 33, 82, 1])).toEqual(24);
    expect(sumTwoSmallestNumbers([52, 76, 14, 12, 4])).toEqual(16);
  });
  it("Should work for more fixed tests as well", () => {
    expect(sumTwoSmallestNumbers([243, 546, 745, 123, 978])).toEqual(366);
    expect(sumTwoSmallestNumbers([1948, 456, 1265, 7896, 9986])).toEqual(1721);
    expect(sumTwoSmallestNumbers([1, 876, 234234, 45345, 34435])).toEqual(877);
    expect(sumTwoSmallestNumbers([5, 4, 1, 2, 3])).toEqual(3);
    expect(
      sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])
    ).toEqual(3453455);
    expect(sumTwoSmallestNumbers([1000, 2, 3, 5])).toEqual(5);
    expect(sumTwoSmallestNumbers([1, 2, 3, 4])).toEqual(3);
  });
  it("Should finally work for random tests", () => {
    function solution(numbers) {
      numbers.sort(function (a, b) {
        return a - b;
      });
      return numbers[0] + numbers[1];
    }
    function randomNumber(a, b) {
      return Math.floor(Math.random() * b - a + 1);
    }

    for (let i = 0; i < 100; i++) {
      var randArr = [
        randomNumber(0, 1000),
        randomNumber(0, 100),
        randomNumber(0, 100),
        randomNumber(0, 1000),
      ];
      expect(sumTwoSmallestNumbers(randArr.slice())).toEqual(solution(randArr));
    }
  });
});

describe("last2EvenNUmbers", () => {
  it("Basic tests", () => {
    expect(last2EvenNUmbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toEqual([4, 6, 8]);
    expect(
      last2EvenNUmbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)
    ).toEqual([-8, 26]);
    expect(last2EvenNUmbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1).toEqual([6]));
  });

  it("Random Tests", () => {
    const randomInteger = (a, b) => Math.floor(Math.random() * (b - a + 1) + a);

    const check = (array, number) =>
      array.filter((item) => item % 2 === 0).slice(-number);

    const checkUnique = (array, number) => {
      const number2 = number;
      for (let i = array.length - 1; number > 0; i--) {
        if (array[i] % 2 === 0) {
          array.push(array[i]);
          number--;
          i--;
        }
      }
      array.splice(0, array.length - number2);
      return array.reverse();
    };

    for (let i = 1; i <= 20; i++) {
      const arrayLength = randomInteger(5, 8);
      const array = [];

      for (let i = 1; i <= 3; i++) {
        array.push(2);
        array.push(23);
        array.push(4);
        array.push(-8);
      }

      for (let i = 1; i <= arrayLength; i++) {
        array.push(randomInteger(-20, 20));
      }

      const number = randomInteger(1, 6);
    }

    expect(last2EvenNUmbers(array, check(array, number))).toBe(
      "It should work for random tests too"
    );
    expect(last2EvenNUmbers(array, checkUnique(array, number))).toBe(
      "You should return a new array"
    );
  });
});
