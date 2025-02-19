import React from "react";
import { useSelector } from "react-redux";
import { productsSelector } from "../redux/slices/productsSlice";
import { currencySelector } from "../redux/slices/currencySlice";
import { formatCurrency } from "../util/formatCurrency.util";
import { useNavigate } from "react-router-dom";
import Rating from "./Rating";
import { useTranslate } from "../hooks/useTranslate";

const RecommendedProducts = () => {
  const { t } = useTranslate();
  const { recommendedProducts } = useSelector(productsSelector);
  const { currency } = useSelector(currencySelector);
  const navigate = useNavigate();

  const handleRedirection = (id) => {
    navigate("/product/" + id);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-3">
        {t("recommended_products")}
      </h2>
      <ul className="flex flex-wrap justify-between gap-y-4">
        {recommendedProducts.map((product) => (
          <li
            key={product.id}
            className="w-[10rem] p-3 bg-white"
            onClick={() => handleRedirection(product.id)}
          >
            <img
              className="aspect-square"
              src={product.image}
              alt={product.name}
            />
            <h3 className="line-clamp-1 text-gray-900 font-semibold">
              {t(product.title)}
            </h3>
            <Rating rating={product.rating.rate} />
            <p className="text-gray-900">
              {formatCurrency(product.price, currency)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendedProducts;
