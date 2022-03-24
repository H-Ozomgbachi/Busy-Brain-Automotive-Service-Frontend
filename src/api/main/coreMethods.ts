export const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

export const NairaFormatter = (value: number) => {
  const result = new Intl.NumberFormat("en", {
    style: "currency",
    currency: "NGN",
  }).format(value);

  return result.replace("NGN", "₦");
};
