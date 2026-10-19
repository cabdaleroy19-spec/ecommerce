import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ShopProvider } from "./shopContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import About from "./assets/pages/About2.jsx";
import Products from "./assets/pages/Products.jsx";
import Cart from "./assets/pages/Cart.jsx";
import Contact from "./assets/pages/Contact.jsx";
import ProductDetails from "./components/ProductDetails.jsx";

const routerProvider = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
index:true,
element :<Products />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShopProvider>
    <RouterProvider router={routerProvider} />
    </ShopProvider>
  </StrictMode>
);