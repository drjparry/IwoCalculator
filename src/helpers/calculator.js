export function calculator({ date, amount, months, interestRate }) {
  let remainingPrinciple = amount;
  let totalInterest = 0;
  const monthlyCalculation = [...Array(months)].map((_, index) => {
    const repaymentDate = date.setMonth(date.getMonth() + 1);
    const principle = amount / months;
    const interest = remainingPrinciple * (interestRate / 100);
    const totalRepayment = principle + interest;

    const calculation = {
      repaymentDate,
      principle,
      interest,
      totalRepayment,
    };

    totalInterest = totalInterest + interest;
    remainingPrinciple = remainingPrinciple - principle;

    return calculation;
  });

  return {
    monthlyCalculation,
    totalCalculation: {
      principle: amount,
      interest: totalInterest,
      totalRepayment: amount + totalInterest,
    },
  };
}
