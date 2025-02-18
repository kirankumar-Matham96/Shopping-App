import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addToCart,
  reduceQuantityFromCart,
} from "../redux/slices/productsSlice";
import Rating from "./Rating";
import { MdDelete } from "react-icons/md";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const Products = ({ products, handleClick }) => {
  const location = useLocation();
  const dispatch = useDispatch();

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
            alt={product.title}
          />
          <div className="text-gray-900 h-[12rem]">
            <h2
              className={`font-semibold my-2 ${
                location.pathname === "/cart" ? "line-clamp-1" : "line-clamp-2"
              }`}
            >
              {product.title}
            </h2>
            <p className="mb-1 line-clamp-2">{product.description}</p>
            <p className="flex items-center gap-2 mb-1">
              <Rating rating={product.rating.rate} /> {product.rating.count}
            </p>
            <p className="text-xl">$ {product.price} USD</p>

            {location.pathname === "/cart" ? (
              <div className="mb-2 flex items-center justify-between">
                <p>Quantity: {product.cartQuantity} </p>
                <div className="flex items-center gap-2">
                  <button
                    className="border-none rounded text-2xl"
                    onClick={() => {
                      console.log("Quantity Decreased");
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
                    onClick={() => {
                      console.log("Quantity Increased");
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
              onClick={() => handleClick(product.id)}
            >
              {location.pathname === "/cart"
                ? "Remove From Cart"
                : "Add To Cart"}
            </button>
          </div>
        </li>
      ))}
    </>
  );
};

export default Products;
