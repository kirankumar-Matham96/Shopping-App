import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  productsSelector,
  fetchProducts,
  addToCart,
} from "../redux/slices/productsSlice.js";
import SideBar from "../components/SideBar.jsx";
import Products from "../components/Products.jsx";

const Shop = () => {
  const { isLoading, error, filteredProducts } = useSelector(productsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
  };

  if (error) return <h1>Something went wrong! Try again later.</h1>;
  if (isLoading) return <h1>Loading.....</h1>;

  /**
   * // TODO:
   *  -> Language and currency changes by the options
   */
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-5">Shop</h2>
      <div className="flex justify-between">
        <div className="w-[25%]">
          <h2 className="text-2xl font-semibold">Filters</h2>
          <SideBar />
        </div>
        <ul className="flex flex-wrap gap-3 w-[80%]">
          <Products products={filteredProducts} handleClick={handleAddToCart} />
        </ul>
      </div>
    </div>
  );
};

export default Shop;
