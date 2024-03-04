


// function def
function sum(first : number, second : number) : number{
    return first+second
}

// function call
let sumOfNumbers : number = sum(1, 2);
console.log(sumOfNumbers);

// Boolean
console.log(sumOfNumbers === 3)


//BigInt
let no : bigint = 90071992547409999n;
console.log(no);

let no2 =  BigInt("90071992547409999");
console.log(no2);

import SimpleInterestCalculator from "./interest/SimpleInterestCalculator";
import CompoundInterestCalculator from "./interest/CompoundInterestCalculator";
import InterestCalculator from "./interest/InterestCalculator";

const simpleInterestCalculator : InterestCalculator = new SimpleInterestCalculator();
const sic = simpleInterestCalculator.calculate(100, 10.0, 10);
console.log(sic)

const comp : InterestCalculator = new CompoundInterestCalculator();
const cic = comp.calculate(100, 10, 12);
console.log(cic);

