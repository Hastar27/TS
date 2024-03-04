"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CompoundInterestCalculator {
    calculate(principal, rate, time) {
        return principal * Math.pow(1 + rate / 100, time) - principal;
    }
}
exports.default = CompoundInterestCalculator;
