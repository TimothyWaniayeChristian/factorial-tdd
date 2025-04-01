import { expect } from "chai";
import factorial from "../factorial.js";
import { describe, it } from "mocha";

describe("Factorial Function", function () {
    it("should return 1 for factorial(1)", function () {
        expect(factorial(1)).to.equal(1);
    });

    it("should return 2 for factorial(2)", function () {
        expect(factorial(2)).to.equal(2);
    });

    it("should return 6 for factorial(3)", function () {
        expect(factorial(3)).to.equal(6);
    });



});
