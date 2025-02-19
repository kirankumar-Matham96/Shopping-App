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

const Shop = () => {
  const { t } = useTranslate();
  const { isLoading, error, filteredProducts, cartProducts } =
  useSelector(productsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const isInCart = (id) => {
    return cartProducts.find((product) => product.id === id);
  };

  const handleAddToCart = (e, id) => {
    e.stopPropagation();
    dispatch(addToCart(id));
  };

  if (error) return <h1>{t("something_went_wrong!_try_again_later.")}</h1>;
  if (isLoading) return <Loading />;

  /**
   * // TODO:
   *  -> Language and currency changes by the options
   */
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-5">{t("shop")}</h2>
      <div className="flex justify-between">
        <div className="w-[25%]">
          <h2 className="text-2xl font-semibold">{t("filters")}</h2>
          <SideBar />
        </div>
        <ul className="flex flex-wrap gap-3 w-[80%]">
          <Products
            products={filteredProducts}
            handleClick={handleAddToCart}
            isInCart={isInCart}
          />
        </ul>
      </div>
    </div>
  );
};

export default Shop;
