import React from "react";
import { mount } from "enzyme";
import { findByTestAttr } from "./test/testUtils";
import { calculator } from "./helpers/calculator";
import RepaymentTable from "./repaymentTable";

const setup = () => {
  const calculation = calculator({
    date: new Date(),
    amount: 10000,
    months: 4,
    interestRate: 3,
  });

  return mount(<RepaymentTable {...calculation} />);
};

describe("it renders without error", () => {
  test("it renders without error", () => {
    const wrapper = setup({ months: 4 });
    const component = findByTestAttr(wrapper, "monthly-calculation-table");
    expect(component.length).toBe(1);
  });
  test("it renders the correct amount of monthly rows", () => {
    const wrapper = setup();
    const monthlyCalulationRow = findByTestAttr(
      wrapper,
      "monthly-calculation-row"
    );
    expect(monthlyCalulationRow.length).toBe(4);
  });

  test("it renders a total row", () => {
    const wrapper = setup();
    const totalCalulationRow = findByTestAttr(wrapper, "total-calculation-row");
    expect(totalCalulationRow.length).toBe(1);
  });
});
