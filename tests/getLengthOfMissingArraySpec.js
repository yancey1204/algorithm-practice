const { expect } = require("chai");
const getLengthOfMissingArray = require("../algorithms/getLengthOfMissingArray");

describe("getLengthOfMissingArray", () => {
    let array;

    it("should return length for nomal case", () => {
        array = [[ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]];

        expect(getLengthOfMissingArray(array)).to.equal(3);
    });

    it("should not return length when there exists empty array", () => {
        array=[[],[0],[4, 2, 3, 1],[1, 4, 1]];

        expect(getLengthOfMissingArray(array)).to.equal(0);
    });

    it("should not return length when array is null", () => {
        array=null;

        expect(getLengthOfMissingArray(array)).to.equal(0);
    });

    it("should not return length when array contains null", () => {
        array=[null,[1, 2]];

        expect(getLengthOfMissingArray(array)).to.equal(0);
    });

    it("should return length when array contains array whose length is greater then 10", () => {
        array=[
            [3, 2],
            [1, 0, 4],
            [0, 4, 4, 0, 0, 1],
            [4, 1, 2, 3, 2],
            [3, 3, 3, 1],
            [3, 3, 4, 2, 3, 4, 3, 3],
            [1, 4, 2, 0, 3, 2, 4, 1, 0],
            [4, 4, 1, 1, 0, 1, 0, 1, 4, 0, 2],
            [4, 1, 4, 2, 1, 1, 1, 4, 2, 1]
        ];

        expect(getLengthOfMissingArray(array)).to.equal(7);
    });
});