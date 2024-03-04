import InterestCalculator from "./InterestCalculator";

class CompoundInterestCalculator implements InterestCalculator {
    calculate(principal: number, rate: number, time: number): number {
        return principal * Math.pow(1+rate/100, time) - principal;
    }
}

export default CompoundInterestCalculator;