export function calculator({ date, amount, months, interestRate }) {
  let remainingPrinciple = amount;
  const calculation = [...Array(months)].map((_, index) => {
    const repaymentDate = date.setMonth(date.getMonth() + 1);
    const principle = amount / months;
    const interest = remainingPrinciple * (interestRate / 100);
    remainingPrinciple = remainingPrinciple - principle;

    return {
      repaymentDate,
      principle,
      interest,
    };
  });

  calculation.push({});
  return calculation;
}
