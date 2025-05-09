import React from "react";

const SingleCollection = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Product Image */}
          <div className="flex justify-center items-center">
            <img
              src="https://via.placeholder.com/400"
              alt="Product"
              className="rounded-lg object-cover"
            />
          </div>

          {/* Right: Product Details */}
          <div>
            <h2 className="text-3xl font-bold mb-2">Red T-shirt</h2>
            <p className="text-xl text-green-600 font-semibold mb-4">₹499</p>

            <p className="text-gray-700 mb-4">
              This is a stylish red t-shirt made of high-quality cotton. Perfect
              for casual wear, available in all standard sizes.
            </p>

            {/* Size Options */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Select Size:</h3>
              <div className="flex gap-2">
                <button className="border px-4 py-1 rounded hover:bg-gray-200">
                  S
                </button>
                <button className="border px-4 py-1 rounded hover:bg-gray-200">
                  M
                </button>
                <button className="border px-4 py-1 rounded hover:bg-gray-200">
                  L
                </button>
                <button className="border px-4 py-1 rounded hover:bg-gray-200">
                  XL
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                Add to Cart
              </button>
              <button className="border border-red-500 text-red-500 px-6 py-2 rounded hover:bg-red-100 transition">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCollection;
