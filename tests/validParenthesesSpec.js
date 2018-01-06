const { expect } = require("chai");
const { validParentheses, validParentheses2 } = require("../algorithms/validParentheses");

describe("validParentheses", () => {
    it("should return true for normal case", () => {
        expect(validParentheses("(())")).to.be.true;
    });

    it("should return false if the length is odd", () => {
        expect(validParentheses(")(()))")).to.be.false;
    });

    it("should return false if it starts with closing parens", () => {
        expect(validParentheses(")())((()())()(")).to.be.false;
    });

    it("should return true if there are a lot of pairs in one string", () => {
        expect(validParentheses("(())((()())())")).to.be.true;
    });
});

describe("validParentheses2", () => {
    it("should return true for normal case for validParentheses2", () => {
        expect(validParentheses2("(())")).to.be.true;
    });

    it("should return false if the length is odd for validParentheses2", () => {
        expect(validParentheses2(")(()))")).to.be.false;
    });

    it("should return false if it starts with closing parens for validParentheses2", () => {
        expect(validParentheses2(")())((()())()(")).to.be.false;
    });

    it("should return true if there are a lot of pairs in one string for validParentheses2", () => {
        expect(validParentheses2("(())((()())())")).to.be.true;
    });
});