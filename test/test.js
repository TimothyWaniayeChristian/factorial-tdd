/**
 * Factorial Function Test Cases
 * 
 * Authors:
 * - Timothy Christian Waniaye
 * - Akol Tino Bridget
 *
 * This file contains unit tests for the factorial function.
 * The tests are written using Mocha (testing framework) and Chai (assertion library).
 * The goal is to ensure that our factorial function correctly calculates factorials.
 */

import { expect } from "chai"; // Importing the 'expect' assertion from Chai
import factorial from "../factorial.js"; // Importing the factorial function from factorial.js
import { describe, it } from "mocha"; // Importing 'describe' and 'it' from Mocha

// Describe block groups all test cases related to the factorial function
describe("Factorial Function", function () {

    // Test Case 1: Factorial of 1 should return 1
    it("should return 1 for factorial(1)", function () {
        expect(factorial(1)).to.equal(1); // Assertion: factorial(1) should be 1
    });

    // Test Case 2: Factorial of 2 should return 2
    it("should return 2 for factorial(2)", function () {
        expect(factorial(2)).to.equal(2); // Assertion: factorial(2) should be 2
    });

    // Test Case 3: Factorial of 3 should return 6
    it("should return 6 for factorial(3)", function () {
        expect(factorial(3)).to.equal(6); // Assertion: factorial(3) should be 6
    });

});
