import React from "react";
import { mount } from "enzyme";
import { findByTestAttr } from "./test/testUtils";

import LoanParameters from "./LoanParameters";

const setup = () => {
  const setupParams = {
    amountRequested: 10000,
    setAmountRequested: jest.fn(),
    duration: 4,
    setDuration: jest.fn(),
  };
  return mount(<LoanParameters props={setupParams} />);
};

describe("loan parameters", () => {
  test("it renders without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-loan-parameters");
    expect(component.length).toBe(1);
  });
  test("it renders an amount requested input", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "amount-requested-input");
    expect(component.length).toBe(1);
  });
  test("it renders a duration input", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "duration-input");
    expect(component.length).toBe(1);
  });
});
