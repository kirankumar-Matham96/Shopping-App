import exchangeRates from "../assets/currencyExchange.json";

export const convertPrice = (price, fromCurrency, toCurrency) => {
  if (fromCurrency === toCurrency) return parseFloat(price).toFixed(2);

  // Convert to USD first
  const priceInUSD =
    fromCurrency === "USD" ? price : price / (exchangeRates[fromCurrency] || 1);

  // Convert from USD to target currency
  const convertedPrice = priceInUSD * (exchangeRates[toCurrency] || 1);

  return parseFloat(convertedPrice).toFixed(2);
};
