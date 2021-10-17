const calculateInterest = ({
  remainingPrinciple,
  interestRate,
  upfrontFees,
  amount,
  index,
}) => {
  if (upfrontFees && index === 0) {
    let fees = amount / 10;
    return fees + remainingPrinciple * (interestRate / 100);
  } else {
    return remainingPrinciple * (interestRate / 100);
  }
};

export function calculator({
  date,
  amount,
  months,
  interestRate,
  upfrontFees,
}) {
  let remainingPrinciple = amount;
  let totalInterest = 0;
  const monthlyCalculation = [...Array(months)].map((_, index) => {
    const repaymentDate = date.setMonth(date.getMonth() + 1);
    const principle = amount / months;
    const interest = calculateInterest({
      remainingPrinciple,
      interestRate,
      upfrontFees,
      amount,
      index,
    });

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
