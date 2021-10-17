export function calculator(amount, months) {
  const calculation = [...Array(months)].map((_, index) => {
    return {};
  });

  calculation.push({});
  return calculation;
}
