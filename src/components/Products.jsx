import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  reduceQuantityFromCart,
} from "../redux/slices/productsSlice";
import { currencySelector } from "../redux/slices/currencySlice";
import Rating from "./Rating";
import { MdDelete } from "react-icons/md";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { useTranslate } from "../hooks/useTranslate";
import { formatCurrency } from "../util/formatCurrency.util";

const Products = ({ products, handleClick, isInCart }) => {
  const { currency } = useSelector(currencySelector);
  const location = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslate();

  const navigate = useNavigate();

  const handleRedirection = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      {products.map((product) => (
        <li
          key={product.id}
          className="w-[16rem] h-auto bg-white px-3 pt-3 pb-5 rounded-2xl"
          onClick={() => handleRedirection(product.id)}
        >
          <img
            className="w-[100%] aspect-square"
            src={product.image}
            alt={t(product.title)}
          />
          <div className="text-gray-900 h-[12rem]">
            <h2
              className={`font-semibold my-2 ${
                location.pathname === "/cart" ? "line-clamp-1" : "line-clamp-2"
              }`}
            >
              {t(product.title)}
            </h2>
            <p className="mb-1 line-clamp-2">{t(product.description)}</p>
            <p className="flex items-center gap-2 mb-1">
              <Rating rating={product.rating.rate} /> {product.rating.count}
            </p>
            <p className="text-xl">
              {formatCurrency(product.price, currency)}
            </p>

            {location.pathname === "/cart" ? (
              <div className="mb-2 flex items-center justify-between">
                <p>
                  {t("quantity")}: {product.cartQuantity}{" "}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    className="border-none rounded text-2xl"
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(reduceQuantityFromCart(product.id));
                    }}
                  >
                    {product.cartQuantity > 1 ? (
                      <CiCircleMinus />
                    ) : (
                      <MdDelete />
                    )}
                  </button>
                  <button
                    className="border-none rounded text-2xl"
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(addToCart(product.id));
                    }}
                  >
                    <CiCirclePlus />
                  </button>{" "}
                </div>
              </div>
            ) : null}
            <button
              type="button"
              className="border-none bg-amber-300 py-1 px-3 rounded-3xl"
              onClick={(e) => handleClick(e, product.id)}
            >
              {location.pathname === "/cart"
                ? t("remove_from_cart") || "Remove From Cart"
                : isInCart(product.id)
                ? t("in_cart") || "In Cart"
                : t("add_to_cart")}
            </button>
          </div>
        </li>
      ))}
    </>
  );
};

export default Products;
