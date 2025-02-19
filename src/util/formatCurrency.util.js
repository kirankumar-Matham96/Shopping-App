import { convertPrice } from "./convertPrice.util";

export const formatCurrency = (price, currency) => {
  const convertedPrice = convertPrice(price, "USD", currency);

  const formattedCurrency = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency,
  }).format(convertedPrice);

  return formattedCurrency;
};
