import React, { useState } from "react";
import LoanParameters from "./LoanParameters";

const LoanCalculator = () => {
  const [amountRequested, setAmountRequested] = useState(10000);
  const [duration, setDuration] = useState(4);

  return (
    <div className="container" data-test="component-app">
      <h1>Your loan</h1>
      <LoanParameters
        amountRequested={amountRequested}
        setAmountRequested={setAmountRequested}
        duration={duration}
        setDuration={setDuration}
      />
    </div>
  );
};

export default LoanCalculator;
