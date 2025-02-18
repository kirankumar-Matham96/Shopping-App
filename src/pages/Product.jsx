import React from "react";
import { useParams } from "react-router-dom";
import RecommendedProducts from "../components/RecommendedProducts";
import { productsSelector } from "../redux/slices/productsSlice";
import { useSelector } from "react-redux";
import Rating from "../components/Rating";

const Product = () => {
  const { id } = useParams();
  const { products, cartProducts } = useSelector(productsSelector);

  const product = products.find((product) => {
    return product.id == id;
  });

  const isInCart = cartProducts.find((product) => {
    return product.id == id;
  });

  if (!product)
    return (
      <div>
        <h2 className="mb-10">Product Not Found!</h2>;
        <RecommendedProducts />
      </div>
    );

  /**
   * // TODO:
   *  -> Language and currency changes by the options
   *  */
  return (
    <div>
      <div className="flex justify-between mb-8 gap-10">
        <div className="w-[50%] p-8 rounded bg-white">
          <img className="" src={product.image} alt={product.title} />
        </div>
        <div className="w-[50%]">
          <h2 className="font-semibold text-2xl">{product.title}</h2>
          <p className="my-2">{product.description}</p>
          <Rating rating={product.rating.rate} />
          <p className="text-2xl my-2">{product.rating.count - 1} + ratings</p>
          <p className="my-2 font-semibold text-3xl">$ {product.price} USD</p>
          {isInCart ? (
            <p className="text-2xl text-amber-500">
              This product is in your cart.
            </p>
          ) : (
            <button className="my-5 border-none py-2 px-5 bg-amber-500 text-gray-800 text-2xl font-semibold">
              Add To Cart
            </button>
          )}
        </div>
      </div>
      <RecommendedProducts />
    </div>
  );
};

export default Product;
