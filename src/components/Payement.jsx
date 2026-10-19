import React from "react";
import CartItems from "./CartItems"
function Payement({ subtotal = 0, onCheckout }) {
  return (
    <div className="lg:w-3/4">
      <div className="border p-4 rounded-lg">
        <h2 className="text-2xl font-semibold mb-5 ">Choose payment method</h2>

        <div className="space-y-4">
          <label className="flex items-center space-x-5 cursor-pointer">
  <input name="payment" type="radio" value="paypal" className="accent-pink-600" />
  <span>Card Payement</span>
</label>

<label className="flex items-center space-x-5 cursor-pointer">
  <input name="payment" type="radio" value="cash" className="accent-pink-600" />
  <span>Cash on delivery</span>
</label>
            
         
        </div>

        <div className="mt-6 border-t pt-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-gray-600">Subtotal</span>
            <span className="text-lg font-semibold text-pink-600">
              ${subtotal.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={onCheckout}
            disabled={subtotal === 0}
            className="w-full bg-pink-900 text-white px-5 py-2 rounded-lg shadow cursor-pointer hover:bg-pink-800 disabled:opacity-50 disabled:cursor transition-colors duration-200"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payement;