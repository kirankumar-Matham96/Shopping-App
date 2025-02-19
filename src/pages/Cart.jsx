import React, { use } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  productsSelector,
  removeFromCart,
  clearCart,
} from "../redux/slices/productsSlice";
import { currencySelector } from "../redux/slices/currencySlice";
import Products from "../components/Products";
import RecommendedProducts from "../components/RecommendedProducts";
import { useTranslate } from "../hooks/useTranslate";
import { notifySuccess } from "../components/Notification";
import { formatCurrency } from "../util/formatCurrency.util";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/ErrorComponent";

const Cart = () => {
  const { cartProducts, totalPrice } = useSelector(productsSelector);
  const { currency } = useSelector(currencySelector);
  const dispatch = useDispatch();
  const { t } = useTranslate();

  const handleRemoveFromCart = (e, id) => {
    e.stopPropagation();
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    dispatch(clearCart());
    notifySuccess("Purchase completed!");
  };

  if (!cartProducts || cartProducts.length === 0)
    return (
      <ErrorBoundary FallbackComponent={ErrorComponent}>
        <h2 className="text-center text-2xl m-20">
          {t("no_products_in_the_cart")}
        </h2>
        <RecommendedProducts />
      </ErrorBoundary>
    );

  return (
    <ErrorBoundary FallbackComponent={ErrorComponent}>
      <h2 className="text-3xl font-semibold mb-5">{t("shopping_cart")}</h2>
      <div className="flex mb-8">
        <div className="flex flex-col w-[25%]">
          <p className="text-2xl">
            {t("total_price")}: <br />
            {formatCurrency(totalPrice, currency)}
          </p>
          <button
            className="border-2 self-start p-3 mt-3"
            onClick={handleCheckout}
          >
            {t("checkout")}
          </button>
        </div>
        <ul className="flex flex-wrap gap-3 gap-y-5 w-[80%]">
          <Products
            products={cartProducts}
            handleClick={handleRemoveFromCart}
          />
        </ul>
      </div>
      <RecommendedProducts />
    </ErrorBoundary>
  );
};

export default Cart;
Cart;
