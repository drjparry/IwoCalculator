import { calculator } from "./calculator";

describe("calculator", () => {
  let date;
  beforeEach(() => {
    date = new Date(2021, 10, 17);
  });
  test("it returns an array for each month calculated plus a total", () => {
    const calculation = calculator({ date, amount: 10000, months: 4 });
    expect(calculation.length).toBe(5);
  });

  test("each months array returns an object with the correct repayment date", () => {
    const calculation = calculator({ date, amount: 10000, months: 4 });
    const firstMonthRepaymentDate = new Date(calculation[0]["repaymentDate"]);
    const thirdMonthRepaymentDate = new Date(calculation[2]["repaymentDate"]);
    expect(firstMonthRepaymentDate.getMonth()).toBe(11);
    expect(thirdMonthRepaymentDate.getMonth()).toBe(1);
  });
});
