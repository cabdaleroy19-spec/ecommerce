import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useOutletContext } from "react-router-dom";
import { useContext } from "react"
import { ShopContext } from "../shopContext.jsx";

import axios from "axios";
import ProductDetailsSkeleton from "./productDetailsSkeleton";


const ProductDetails = () => {
    const context = useContext(ShopContext);

   const { addToCart } = useContext(ShopContext);
 const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
        setMainImage(data.thumbnail);
        setProduct(data);
      } catch (e) {
        console.error(e);
      }
    };
    getProduct();
  }, [id]);
 
  if (!product) return <ProductDetailsSkeleton />

  return (
    <div className="p-4 md:p-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-pink-600 font-bold text-white px-4 py-2 rounded-lg shadow hover:bg-pink-700 transition-colors duration-200"
      >
        ← Go Back
      </button>

      <h1 className="text-3xl font-bold mb-6">{product.title}</h1>

      <div className="md:flex">
        <div className="md:w-1/2 pr-4 mb-6 md:mb-0">
          <img
            className="w-full h-96 object-cover rounded-lg bg-black/15"
            src={mainImage}
            alt={product.title}
          />

          <div className="flex mt-4 space-x-2 overflow-x-auto">
            {product.images.map((image) => (
              <img
                key={image}
                onClick={() => setMainImage(image)}
                className="w-24 h-24 object-cover rounded-lg shadow cursor-pointer"
                src={image}
                alt={product.title}
              />
            ))}
          </div>
        </div>

        <div className="md:w-1/2 pl-4">
          <p className="text-gray-600 mb-4">{product.description}</p>

          <div className="flex justify-between items-center mb-4">
            <span className="text-pink-600 font-semibold text-2xl">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500">
              {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
            </span>
          </div>

          <div className="mb-4">
            <span className="text-yellow-500">
              {"★".repeat(Math.round(product.rating))}
            </span>
            <span className="text-gray-300">
              {"★".repeat(5 - Math.round(product.rating))}
            </span>
          </div>

      <button

  className="bg-pink-600 text-white px-5 py-2 rounded-lg shadow cursor-pointer hover:bg-pink-700 transition-colors duration-200"

onClick={() => context.addToCart(product)}
>
  Add to Cart
</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;