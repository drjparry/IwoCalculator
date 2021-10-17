import React from "react";

const MonthlyRepaymentRows = ({ monthlyCalculation }) => {
  return monthlyCalculation.map((month, index) => {
    console.log(month);
    const date = new Date(month.repaymentDate),
      formattedDate = date.toLocaleDateString("en-UK");

    return (
      <tr key={index} data-test="monthly-calculation-row">
        <td>{formattedDate}</td>
        <td>{month.principle}</td>
        <td>{month.interest}</td>
        <td>{month.totalRepayment}</td>
      </tr>
    );
  });
};

const TotalCalculationRow = ({ totalCalculation }) => {
  return (
    <tr data-test="total-calculation-row">
      <td>Total</td>
      <td>{totalCalculation.principle}</td>
      <td>{totalCalculation.interest}</td>
      <td>{totalCalculation.totalRepayment}</td>
    </tr>
  );
};

const RepaymentTable = ({ monthlyCalculation, totalCalculation }) => {
  return (
    <div data-test="monthly-calculation-table">
      <table className="table table-sm">
        <thead className="thead-light">
          <tr>
            <th>Repayment date</th>
            <th>Principle</th>
            <th>Interest</th>
            <th>Total repayment</th>
          </tr>
        </thead>
        <tbody>
          <MonthlyRepaymentRows monthlyCalculation={monthlyCalculation} />
          <TotalCalculationRow totalCalculation={totalCalculation} />
        </tbody>
      </table>
    </div>
  );
};

export default RepaymentTable;
