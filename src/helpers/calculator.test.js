import { calculator } from "./calculator";

describe("calculator", () => {
  test("it returns an array for each month calculated plus a total", () => {
    const calculation = calculator(10000, 4);
    expect(calculation.length).toBe(5);
  });
});
