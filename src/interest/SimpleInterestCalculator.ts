import InterestCalculator from "./InterestCalculator";

class SimpleInterestCalculator implements InterestCalculator {

    calculate(principal: number, rate: number, time: number): number {
        return principal*rate*time/100;
    }


}
export default SimpleInterestCalculator;