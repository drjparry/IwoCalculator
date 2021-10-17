import { calculator } from "./calculator";

describe("calculator", () => {
  let date;
  let calculation;

  beforeEach(() => {
    date = new Date(2021, 10, 17);
    calculation = calculator({
      date,
      amount: 10000,
      months: 4,
      interestRate: 3,
    });
  });
  test("it returns an array for each month calculated plus a total", () => {
    expect(calculation.length).toBe(5);
  });

  test("each months array returns an object with the correct repayment date", () => {
    const firstMonthRepaymentDate = new Date(calculation[0]["repaymentDate"]);
    const thirdMonthRepaymentDate = new Date(calculation[2]["repaymentDate"]);
    expect(firstMonthRepaymentDate.getMonth()).toBe(11);
    expect(thirdMonthRepaymentDate.getMonth()).toBe(1);
  });

  test("each months array returns an object with the correct principle", () => {
    const principle = calculation[0]["principle"];
    expect(principle).toBe(2500);
  });

  test("each months array returns an object with the months interest", () => {
    const firstMonthsInterest = calculation[0]["interest"];
    const thirdMonthsInterest = calculation[2]["interest"];
    expect(firstMonthsInterest).toBe(300);
    expect(thirdMonthsInterest).toBe(150);
  });

  test("each months array returns an object with the total repayment", () => {
    const firstMonthsRepayment = calculation[0]["totalRepayment"];
    const thirdMonthsRepayment = calculation[2]["totalRepayment"];
    expect(firstMonthsRepayment).toBe(2800);
    expect(thirdMonthsRepayment).toBe(2650);
  });
});
