import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  productsSelector,
  fetchProducts,
  addToCart,
} from "../redux/slices/productsSlice.js";
import SideBar from "../components/SideBar.jsx";
import Products from "../components/Products.jsx";
import Loading from "../components/Loading.jsx";
import { useTranslate } from "../hooks/useTranslate.js";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/ErrorComponent";

const Shop = () => {
  const { t } = useTranslate();
  const { isLoading, error, filteredProducts, cartProducts } =
    useSelector(productsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    console.log(filteredProducts);
  }, [filteredProducts]);

  const isInCart = (id) => {
    return cartProducts.find((product) => product.id === id);
  };

  const handleAddToCart = (e, id) => {
    e.stopPropagation();
    dispatch(addToCart(id));
  };

  if (error) return <ErrorComponent />;
  if (isLoading)
    return (
      <div className="loading-bg-container">
        <Loading />
      </div>
    );

  return (
    <ErrorBoundary FallbackComponent={ErrorComponent}>
      <h2 className="text-3xl font-semibold mb-5">{t("shop")}</h2>
      <div className="flex justify-between">
        <div className="w-[25%]">
          <h2 className="text-2xl font-semibold">{t("filters")}</h2>
          <SideBar />
        </div>
        <ul className="flex flex-wrap gap-3 w-[80%]">
          {isLoading ? (
            [...Array(6)].map((_, index) => (
              <div
                key={index}
                className="w-48 h-56 bg-gray-200 animate-pulse"
              ></div>
            ))
          ) : filteredProducts.length > 0 ? (
            <Products
              products={filteredProducts}
              handleClick={handleAddToCart}
              isInCart={isInCart}
            />
          ) : (
            <p className="text-xl font-semibold ms-20">
              {t("product_not_found!")}
            </p>
          )}
        </ul>
      </div>
    </ErrorBoundary>
  );
};

export default Shop;
