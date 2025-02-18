import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  productsSelector,
  fetchProducts,
} from "../redux/slices/productsSlice.js";
import SideBar from "../components/SideBar.jsx";
import Products from "../components/Products.jsx";

const Shop = () => {
  const { isLoading, error, filteredProducts } = useSelector(productsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (error) return <h1>Something went wrong! Try again later.</h1>;
  if (isLoading) return <h1>Loading.....</h1>;

  /**
   * // TODO:
   *  -> infinite scrolling
   *  -> Language and currency changes by the options
   *  -> Add Recommended Products section
   */
  // make it facet filter
  // <p className="">{product.category}</p>
  // <p className="">{product.rating.rate}</p>
  return (
    <div>
      <h2>Shop</h2>
      <div className="flex justify-between">
        <div className="w-[25%]">
          <h2>Filters</h2>
          <SideBar />
        </div>
        <ul className="flex flex-wrap gap-3 w-[80%]">
          <Products products={filteredProducts} />
        </ul>
      </div>
    </div>
  );
};

export default Shop;
