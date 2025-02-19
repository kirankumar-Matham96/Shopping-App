import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecommendedProducts from "../components/RecommendedProducts";
import { productsSelector, addToCart } from "../redux/slices/productsSlice";
import { currencySelector } from "../redux/slices/currencySlice";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../components/Rating";
import { useTranslate } from "../hooks/useTranslate";
import { formatCurrency } from "../util/formatCurrency.util";

const Product = () => {
  const { t } = useTranslate();
  const { id } = useParams();
  const { products, cartProducts } = useSelector(productsSelector);
  const { currency } = useSelector(currencySelector);
  const dispatch = useDispatch();
  const [isInCart, setIsInCart] = useState(
    cartProducts.find((product) => {
      return product.id == id;
    })
  );

  const product = products.find((product) => {
    return product.id == id;
  });

  useEffect(() => {
    setIsInCart(
      cartProducts.find((product) => {
        return product.id == id;
      })
    );
  }, [cartProducts]);

  const handleAddToCart = () => {
    console.log("added to cart");
    dispatch(addToCart(product.id));
  };

  if (!product)
    return (
      <div>
        <h2 className="mb-10">{t("product_not_found!")}</h2>;
        <RecommendedProducts />
      </div>
    );

  return (
    <div>
      <div className="flex justify-between mb-8 gap-10">
        <div className="w-[50%] p-8 rounded bg-white">
          <img className="" src={product.image} alt={product.title} />
        </div>
        <div className="w-[50%]">
          <h2 className="font-semibold text-2xl">
            {t(product.title.toLowerCase().split(" ").join("_"))}
          </h2>
          <p className="my-2">{product.description}</p>
          <Rating rating={product.rating.rate} />
          <p className="text-2xl my-2">
            {product.rating.count - 1} + {t("ratings")}
          </p>
          <p className="my-2 font-semibold text-3xl">
            {formatCurrency(product.price, currency)}
          </p>
          {isInCart ? (
            <p className="text-2xl text-amber-500">
              {t("this_product_is_in_your_cart.")}
            </p>
          ) : (
            <button
              className="my-5 border-none py-2 px-5 bg-amber-500 text-gray-800 text-2xl font-semibold"
              onClick={handleAddToCart}
            >
              {t("add_to_cart")}
            </button>
          )}
        </div>
      </div>
      <RecommendedProducts />
    </div>
  );
};

export default Product;
