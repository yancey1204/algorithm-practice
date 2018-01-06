const { expect } = require("chai");
const underTest = require("../algorithms/sumPairs");

describe("sum pairs", () => {
    it("should return pairs with [1, 7] for sum = 8", () => {
        const l1= [1, 4, 8, 7, 3, 15];

        expect(underTest(l1, 8)).to.deep.equal([1, 7]);
    });

    it("should return pairs with negative values", () => {
        const l2= [1, -2, 3, 0, -6, 1];

        expect(underTest(l2, -6)).to.deep.equal([0, -6]);
    });

    it("should return undefined when there does not exist any pairs", () => {
        const l3= [20, -13, 40];

        expect(underTest(l3, -7)).to.deep.equal(undefined);
    });

    it("should return the first pair that match", () => {
        const l4= [1, 2, 3, 4, 1, 0];

        expect(underTest(l4, 2)).to.deep.equal([1, 1]);
    });
});