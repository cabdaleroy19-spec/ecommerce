import { createContext, useEffect, useReducer } from "react";
import shopReducer, { initialState } from "./shopReducer";

export const ShopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const total = state.products.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
  );
useEffect(() => {
  localStorage.setItem(
    "cart_items",
    JSON.stringify({
      products: state.products,
      total: total,
    })
  );
}, [state.products, total]);
  


  const addToCart = (product) => {
    const index = state.products.findIndex((p) => p.id === product.id);
    let updatedProducts = [...state.products];

    if (index !== -1) {
      updatedProducts[index] = {
        ...updatedProducts[index],
        quantity: updatedProducts[index].quantity + 1,
      };
    } else {
      updatedProducts.push({ ...product, quantity: 1 });
    }

    dispatch({ type: "ADD_TO_CART", payload: { products: updatedProducts } });
  };

  const removeFromCart = (id) => {
    const updatedProducts = state.products.filter((p) => p.id !== id);
    dispatch({ type: "REMOVE_FROM_CART", payload: { products: updatedProducts } }
      
    );
  };

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const value = { products: state.products, total, addToCart, removeFromCart, clearCart };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
export default ShopContext