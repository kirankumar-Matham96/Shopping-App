import React from "react";
import Rating from "./Rating";
const Products = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <li key={product.id} className="w-[16rem] bg-white p-3 rounded-2xl">
          <img
            className="w-[100%] aspect-square"
            src={product.image}
            alt={product.title}
          />
          <div className="text-gray-900 h-[12rem]">
            <h2 className="font-semibold my-2 line-clamp-2">{product.title}</h2>
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
    </div>
  );
};

export default Products;
