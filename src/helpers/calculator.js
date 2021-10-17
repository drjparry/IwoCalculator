export function calculator({ date, amount, months }) {
  const calculation = [...Array(months)].map((_, index) => {
    const repaymentDate = date.setMonth(date.getMonth() + 1);
    return {
      repaymentDate,
    };
  });

  calculation.push({});
  return calculation;
}
