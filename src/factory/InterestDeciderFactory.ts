import InterestCalculator from "../interest/InterestCalculator";
import SimpleInterestCalculator from "../interest/SimpleInterestCalculator";

class InterestDeciderFactory {

    public getInterestCalculator(name : string) : InterestCalculator {
        if(name === null){
            throw new Error
        }
        return new SimpleInterestCalculator();
    }
}