import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  productsSelector,
  removeFromCart,
} from "../redux/slices/productsSlice";
import Products from "../components/Products";
import RecommendedProducts from "../components/RecommendedProducts";

const Cart = () => {
  const { cartProducts, totalPrice } = useSelector(productsSelector);
  const dispatch = useDispatch();

  /**
   * // TODO:
   *  -> Add or Remove features (products to cart)
   *  -> Calculate the price
   *  -> Add checkout feature
   *  -> Language and currency changes by the options
   *  */

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  if (!cartProducts || cartProducts.length === 0)
    return <h2>No Products In the Cart!</h2>;

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-5">Shopping Cart</h2>
      <div className="flex mb-8">
        <div className="flex flex-col w-[25%]">
          <p className="text-2xl">
            Total Price: <br />$ {totalPrice} USD
          </p>
          <button
            className="border-2 self-start p-3 mt-3"
            onClick={() => console.log("Purchase completed!")}
          >
            Checkout
          </button>
        </div>
        <ul className="flex flex-wrap gap-3 gap-y-5 w-[80%]">
          <Products
            products={cartProducts}
            handleClick={handleRemoveFromCart}
          />
        </ul>
      </div>
      <RecommendedProducts />
    </div>
  );
};

export default Cart;
Cart;
