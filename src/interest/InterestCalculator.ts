import SimpleInterestCalculator from "./SimpleInterestCalculator";

interface InterestCalculator {
    calculate(principal: number, rate: number, time: number) : number;
}

export default InterestCalculator;