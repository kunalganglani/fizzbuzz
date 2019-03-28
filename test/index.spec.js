import { fizzBuzz } from "../index";
let chai = require("chai");
chai.should();

describe("Unit tests for the module", () => {
  describe("fizzbuzz()", () => {
    it("should return output for default range 1-100 on no params", () => {
      // Arrange
      let expectedOut =
        "12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz1617Fizz19BuzzFizz2223FizzBuzz26Fizz2829FizzBuzz3132Fizz34BuzzFizz3738FizzBuzz41Fizz4344FizzBuzz4647Fizz49BuzzFizz5253FizzBuzz56Fizz5859FizzBuzz6162Fizz64BuzzFizz6768FizzBuzz71Fizz7374FizzBuzz7677Fizz79BuzzFizz8283FizzBuzz86Fizz8889FizzBuzz9192Fizz94BuzzFizz9798FizzBuzz";

      // Act
      let res = fizzBuzz();

      // Assert
      res.should.be.equal(expectedOut);
    });

    it("should return 1 on start and end as 1", () => {
      // Arrange
      let expectedOut = "1";

      // Act
      let res = fizzBuzz(1, 1);

      // Assert
      res.should.be.equal(expectedOut);
    });

    it("should return Fizz on start and end as 3", () => {
      // Arrange
      let expectedOut = "Fizz";

      // Act
      let res = fizzBuzz(3, 3);

      // Assert
      res.should.be.equal(expectedOut);
    });

    it("should return Buzz on start and end as 5", () => {
      // Arrange
      let expectedOut = "Buzz";

      // Act
      let res = fizzBuzz(5, 5);

      // Assert
      res.should.be.equal(expectedOut);
    });

    it("should return FizzBuzz on start and end as 15", () => {
      // Arrange
      let expectedOut = "FizzBuzz";

      // Act
      let res = fizzBuzz(15, 15);

      // Assert
      res.should.be.equal(expectedOut);
    });

    it("should throw error on invalid arguments", () => {
      // Arrange
      let expectedOut = "Invalid arguments";
      let invalidArgs = {
        badRange: [50, 15],
        negativeStart: [-1, 15],
        negativeEnd: [1, -15],
        negativeBothEnds: [-10, -2]
      };

      // Act, Assert
      (function() {
        fizzBuzz(...invalidArgs.badRange);
      }.should.throw(expectedOut) &&
        function() {
          fizzBuzz(...invalidArgs.negativeStart);
        }.should.throw(expectedOut) &&
        function() {
          fizzBuzz(...invalidArgs.negativeEnd);
        }.should.throw(expectedOut) &&
        function() {
          fizzBuzz(...invalidArgs.negativeBothEnds);
        }.should.throw(expectedOut)
      );
    });
  });
});
