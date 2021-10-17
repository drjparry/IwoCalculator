import { calculator } from "./calculator";

const AMOUNT = 10000;

describe("calculator", () => {
  let date;
  let calculation;

  beforeEach(() => {
    date = new Date(2021, 10, 17);
    calculation = calculator({
      date,
      amount: AMOUNT,
      months: 4,
      interestRate: 3,
    });
  });
  test("it returns an array for each month calculated", () => {
    const monthlyCalculation = calculation["monthlyCalculation"];
    expect(monthlyCalculation.length).toBe(4);
  });

  test("each months array returns an object with the correct repayment date", () => {
    const monthlyCalculation = calculation["monthlyCalculation"];
    const firstMonthRepaymentDate = new Date(
      monthlyCalculation[0]["repaymentDate"]
    );
    const thirdMonthRepaymentDate = new Date(
      monthlyCalculation[2]["repaymentDate"]
    );
    expect(firstMonthRepaymentDate.getMonth()).toBe(11);
    expect(thirdMonthRepaymentDate.getMonth()).toBe(1);
  });

  test("each months array returns an object with the correct principle", () => {
    const monthlyCalculation = calculation["monthlyCalculation"];
    const principle = monthlyCalculation[0]["principle"];
    expect(principle).toBe(2500);
  });

  test("each months array returns an object with the months interest", () => {
    const monthlyCalculation = calculation["monthlyCalculation"];
    const firstMonthsInterest = monthlyCalculation[0]["interest"];
    const thirdMonthsInterest = monthlyCalculation[2]["interest"];
    expect(firstMonthsInterest).toBe(300);
    expect(thirdMonthsInterest).toBe(150);
  });

  test("each months array returns an object with the total repayment", () => {
    const monthlyCalculation = calculation["monthlyCalculation"];
    const firstMonthsRepayment = monthlyCalculation[0]["totalRepayment"];
    const thirdMonthsRepayment = monthlyCalculation[2]["totalRepayment"];
    expect(firstMonthsRepayment).toBe(2800);
    expect(thirdMonthsRepayment).toBe(2650);
  });

  test("last item in the calculation is the total principle, interest and repayment", () => {
    const totalCalculation = calculation["totalCalculation"];
    expect(totalCalculation["principle"]).toBe(AMOUNT);
    expect(totalCalculation["interest"]).toBe(750);
    expect(totalCalculation["totalRepayment"]).toBe(10750);
  });
});
