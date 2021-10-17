export function calculator({ date, amount, months, interestRate }) {
  let remainingPrinciple = amount;
  let totalInterest = 0;
  const calculation = [...Array(months)].map((_, index) => {
    const repaymentDate = date.setMonth(date.getMonth() + 1);
    const principle = amount / months;
    const interest = remainingPrinciple * (interestRate / 100);
    totalInterest = totalInterest + interest;
    const totalRepayment = principle + interest;
    remainingPrinciple = remainingPrinciple - principle;

    return {
      repaymentDate,
      principle,
      interest,
      totalRepayment,
    };
  });

  calculation.push({
    principle: amount,
    interest: totalInterest,
    totalRepayment: amount + totalInterest,
  });
  return calculation;
}
