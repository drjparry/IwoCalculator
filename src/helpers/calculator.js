export function calculator({ date, amount, months, interestRate }) {
  let remainingPrinciple = amount;
  const calculation = [...Array(months)].map((_, index) => {
    const repaymentDate = date.setMonth(date.getMonth() + 1);
    const principle = amount / months;
    const interest = remainingPrinciple * (interestRate / 100);
    const totalRepayment = principle + interest;
    remainingPrinciple = remainingPrinciple - principle;

    return {
      repaymentDate,
      principle,
      interest,
      totalRepayment,
    };
  });

  calculation.push({});
  return calculation;
}
