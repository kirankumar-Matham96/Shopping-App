import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  productsSelector,
  fetchProducts,
} from "../redux/slices/productsSlice.js";

const Shop = () => {
  const { isLoading, error, products } = useSelector(productsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (error) return <h1>Something went wrong! Try again later.</h1>;
  if (isLoading) return <h1>Loading.....</h1>;

  console.log("🚀 ~ Shop ~ products:", products);

  /**
   * // TODO:
   *  -> Render the data in the shop route
   *  -> Add features as filtering by price and category, search by product, infinite scrolling.
   *  -> Add Recommended Products section
   *  -> Language and currency changes by the options
   *  */
  return <div>Shop/Search Page</div>;
};

export default Shop;
