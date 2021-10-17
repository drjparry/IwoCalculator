import React, { useState, useEffect } from "react";
import { calculator } from "./helpers/calculator";
import RepaymentTable from "./RepaymentTable";

const InterestRate = ({ interestRate, setInterestRate }) => (
  <span data-test="interest-rate-input">
    <span>Interest rate</span>
    <input
      className="mb-2 mx-sm-3"
      data-test="amount-requested-input"
      placeholder="amount"
      value={interestRate}
      onChange={(event) => setInterestRate(event.target.value)}
    ></input>
    <span>(in %)</span>
  </span>
);

const LoanCalculation = ({ amountRequested, duration, upfrontFees }) => {
  const [interestRate, setInterestRate] = useState(3);
  const [calculation, setCalculation] = useState();

  useEffect(() => {
    if (amountRequested && duration && interestRate) {
      const newCalculation = calculator({
        date: new Date(),
        amount: parseInt(amountRequested),
        months: parseInt(duration),
        interestRate: parseInt(interestRate),
        upfrontFees,
      });
      setCalculation(newCalculation);
    }
  }, [amountRequested, duration, interestRate, upfrontFees]);

  return (
    <div data-test="component-loan-calculation">
      <InterestRate
        interestRate={interestRate}
        setInterestRate={setInterestRate}
      />
      {calculation && <RepaymentTable {...calculation} />}
      {upfrontFees ? "Business Loan" : "Revolving credit facility"}
    </div>
  );
};

export default LoanCalculation;
