"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// function def
function sum(first, second) {
    return first + second;
}
// function call
let sumOfNumbers = sum(1, 2);
console.log(sumOfNumbers);
// Boolean
console.log(sumOfNumbers === 3);
//BigInt
let no = 90071992547409999n;
console.log(no);
let no2 = BigInt("90071992547409999");
console.log(no2);
const SimpleInterestCalculator_1 = __importDefault(require("./interest/SimpleInterestCalculator"));
const CompoundInterestCalculator_1 = __importDefault(require("./interest/CompoundInterestCalculator"));
const simpleInterestCalculator = new SimpleInterestCalculator_1.default();
const sic = simpleInterestCalculator.calculate(100, 10.0, 10);
console.log(sic);
const comp = new CompoundInterestCalculator_1.default();
const cic = comp.calculate(100, 10, 12);
console.log(cic);
