import React, { useState } from "react";

const AmountRequested = ({ amountRequested, setAmountRequested }) => {
  return (
    <span>
      <span>Amount requested</span>
      <input
        className="mb-2 mx-sm-3"
        data-test="amount-requested-input"
        placeholder="amount"
        value={amountRequested}
        onChange={(event) => setAmountRequested(event.target.value)}
      ></input>
      <span>(in £)</span>
    </span>
  );
};

const Duration = ({ Duration, setDuration }) => {
  return (
    <span>
      <span>Amount requested</span>
      <input
        className="mb-2 mx-sm-3"
        data-test="duration-input"
        placeholder="duration"
        value={Duration}
        onChange={(event) => setDuration(event.target.value)}
      ></input>
      <span>(in £)</span>
    </span>
  );
};

const LoanCalculator = () => {
  const [amountRequested, setAmountRequested] = useState(10000);
  const [duration, setDuration] = useState(4);

  return (
    <div className="container" data-test="component-app">
      <h1>Your loan</h1>
      <AmountRequested
        amountRequested={amountRequested}
        setAmountRequested={setAmountRequested}
      />
      <Duration duration={duration} setDuration={setDuration} />
    </div>
  );
};

export default LoanCalculator;
