import React from "react";
import { IoIosTrash } from "react-icons/io";
import { useOutletContext } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../shopContext.jsx";

import Payment from "./Payement";

const CartItems = () => {
  const { products, total, removeFromCart } = useContext(ShopContext);
  const subtotal = products.reduce(
  (sum, p) => sum + p.price * (p.quantity ?? 1),
  0
);

  return (
    <div className="flex flex-col lg:flex-row p-4 lg:p-8 space-y-6 lg:space-y-0 lg:space-x-6">
      {/* Cart items section */}
      <div className="flex-1">
        <h2>
          {products.length > 0
            ? "Your cart items"
            : "Your cart is empty right now, so please go ahead and add new items"}
        </h2>

        {products.map((products) => (
          <div key={products.id} className="flex items-start space-x-4 mb-6">
            <img
              className="w-24 h-24 object-cover rounded-lg"
              src={products.thumbnail}
              alt={products.title}
            />

            {/* product info */}
            <div className="flex flex-col justify-between flex-1">
              <h3 className="text-lg font-semibold">{products.title}</h3>
              <div className="text-sm text-gray-500">{products.description}</div>

              {/* price & quantity */}
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center space-x-2">
                  <span className="text-lg text-pink-600 font-semibold">
                    ${products.price.toFixed(2)}
                  </span>

                  <div className="flex items-center space-x-2">
                    <label htmlFor={`qty-${products.id}`} className="sr-only">
                      Quantity
                    </label>
                    <input
                      id={`qty-${products.id}`}
                      type="number"
                      min="1"
                      defaultValue={products.quantity ?? 1}
                      className="w-16 border border-gray-300 rounded-md p-2 text-center"
                    />
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(products.id)}
                  aria-label={`Remove ${products.title}`}
                  className="text-red-500 hover:text-red-700 transition-colors duration-200 ease-in-out"
                >
                  <IoIosTrash className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Payment section */}
      <div className="lg:w-1/3">
        <Payment   subtotal={subtotal}/>
      </div>
    </div>
  );
};

export default CartItems;