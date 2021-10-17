import React from "react";

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

const Duration = ({ duration, setDuration }) => {
  return (
    <div>
      <span>Duration</span>
      <input
        className="mb-2 mx-sm-3"
        data-test="duration-input"
        placeholder="duration"
        value={duration}
        onChange={(event) => setDuration(event.target.value)}
      ></input>
      <span>(in months)</span>
    </div>
  );
};

const LoanParameters = ({
  amountRequested,
  setAmountRequested,
  duration,
  setDuration,
}) => {
  return (
    <div data-test="component-loan-parameters">
      <AmountRequested
        amountRequested={amountRequested}
        setAmountRequested={setAmountRequested}
      />
      <Duration duration={duration} setDuration={setDuration} />
    </div>
  );
};

export default LoanParameters;
