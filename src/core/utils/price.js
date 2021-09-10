export const Price = (value) => {
  if (!value) return 0;
  const price = parseInt(value).toLocaleString("fa");
  return price;
};
