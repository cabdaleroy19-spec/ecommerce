import React from "react";

const ProductDetailsSkeleton = () => {
  return (
    <div className="p-4 md:p-8 animate-pulse">
      {/* product title */}
      <div className="w-1/2 h-10 mb-6 rounded bg-gradient-to-t from-gray-200 to-gray-300"></div>

      <div className="md:flex">
        {/* left column: images */}
        <div className="md:w-1/2 pr-4 mb-6 md:mb-0">
          <div className="w-full h-96 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300"></div>

          <div className="flex mt-4 space-x-2 overflow-x-auto">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-24 h-24 shrink-0 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300"
              ></div>
            ))}
          </div>
        </div>

        {/* right column: details */}
        <div className="md:w-1/2 md:pl-4 space-y-4">
          <div className="h-4 rounded bg-gradient-to-r from-gray-200 to-gray-300"></div>
          <div className="h-4 w-5/6 rounded bg-gradient-to-r from-gray-200 to-gray-300"></div>
          <div className="h-8 w-32 rounded bg-gradient-to-r from-gray-200 to-gray-300"></div>
          <div className="h-10 w-36 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300"></div>
        </div>

        <div className="w1/2 h-10 bg-gradient to-r  from-gray-200  to-gray-300"></div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;