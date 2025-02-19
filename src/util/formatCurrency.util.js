import exchangeRates from "../assets/currencyExchange.json";

export const formatCurrency = (price, currency) => {
  const rate = exchangeRates[currency] || 1;
  const convertedPrice = price * rate;

  const formattedCurrency = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency,
  }).format(convertedPrice);

  return formattedCurrency;
};
