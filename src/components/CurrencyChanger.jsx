import React from "react";
import { setCurrency, currencySelector } from "../redux/slices/currencySlice";
import { useDispatch, useSelector } from "react-redux";
import exchangeRates from "../assets/currencyExchange.json";
import { notifySuccess } from "../components/Notification";
import { ErrorBoundary } from "react-error-boundary";

const ErrorComponent = React.lazy(() => import("./ErrorComponent"));

const CurrencyChanger = () => {
  const dispatch = useDispatch();
  const { currency } = useSelector(currencySelector);

  const handleCurrencyChange = (e) => {
    dispatch(setCurrency(e.target.value));
    notifySuccess("Currency changed successfully");
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorComponent}>
      <select
        value={currency}
        onChange={handleCurrencyChange}
        className="currency-dropdown"
      >
        {Object.keys(exchangeRates).map((curr) => (
          <option key={curr} value={curr} className="text-gray-900">
            {curr}
          </option>
        ))}
      </select>
    </ErrorBoundary>
  );
};

export default CurrencyChanger;
