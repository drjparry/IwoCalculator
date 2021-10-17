import React, { useState, useEffect } from "react";
import LoanParameters from "./LoanParameters";
import LoanCalculation from "./LoanCalculation";

const LoanCalculator = () => {
  const [amountRequested, setAmountRequested] = useState(10000);
  const [duration, setDuration] = useState(4);

  useEffect(() => {}, [amountRequested, duration]);

  return (
    <div className="container" data-test="component-app">
      <h1>Your loan</h1>
      <LoanParameters
        amountRequested={amountRequested}
        setAmountRequested={setAmountRequested}
        duration={duration}
        setDuration={setDuration}
      />
      <LoanCalculation amountRequested={amountRequested} duration={duration} />
    </div>
  );
};

export default LoanCalculator;
