import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  productsSelector,
  fetchProducts,
} from "../redux/slices/productsSlice.js";
import Rating from "../components/Rating";

const Shop = () => {
  const { isLoading, error, products } = useSelector(productsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (error) return <h1>Something went wrong! Try again later.</h1>;
  if (isLoading) return <h1>Loading.....</h1>;

  /**
   * // TODO:
   *  -> Render the data in the shop route
   *  -> Add features as filtering by price and category, search by product, infinite scrolling.
   *  -> Add Recommended Products section
   *  -> Language and currency changes by the options
   */
  console.log("🚀 ~ Shop ~ products:", products);
  // make it facet filter
  // <p className="">{product.category}</p>
  // <p className="">{product.rating.rate}</p>
  return (
    <div>
      <h2>Shop</h2>
      <div className="flex justify-between">
        <div className="w-[25%]">
          <h2>Facets</h2>
        </div>
        <ul className="flex flex-wrap gap-3 w-[80%]">
          {products.map((product) => (
            <li key={product.id} className="w-[16rem] bg-white p-3 rounded-2xl">
              <img
                className="w-[100%] aspect-square"
                src={product.image}
                alt={product.title}
              />
              <div className="text-gray-900 h-[12rem]">
                <h2 className="font-semibold my-2 line-clamp-2">
                  {product.title}
                </h2>
                <p className="mb-1 line-clamp-2">{product.description}</p>
                <p className="flex items-center gap-2 mb-1">
                  <Rating rating={product.rating.rate} /> {product.rating.count}
                </p>
                <p className="text-xl">$ {product.price} USD</p>
                <button
                  type="button"
                  className="border-none bg-amber-300 py-1 px-3 rounded-3xl"
                >
                  Add To Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Shop;
