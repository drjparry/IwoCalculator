export function calculator({ date, amount, months }) {
  const calculation = [...Array(months)].map((_, index) => {
    const repaymentDate = date.setMonth(date.getMonth() + 1);
    const principle = amount / months;
    return {
      repaymentDate,
      principle,
    };
  });

  calculation.push({});
  return calculation;
}
