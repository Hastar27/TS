"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SimpleInterestCalculator {
    calculate(principal, rate, time) {
        return principal * rate * time / 100;
    }
}
exports.default = SimpleInterestCalculator;
