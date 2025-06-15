import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../features/cartslice/CartSlice";

const SingleCollection = () => {
  const { id } = useParams();
  const dispatchProduct = useDispatch();

  const [singleData, setSingleData] = useState([]);

  useEffect(() => {
    fetch(`/api/singleuserproduct/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setSingleData(result.data);
      });
  }, [id]);

  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Product Image */}
          <div className="flex justify-center items-center">
            <img
              src={`/uploads/${singleData.ProductImage}`}
              alt="Product"
              className="rounded-lg object-cover"
            />
          </div>

          {/* Right: Product Details */}
          <div>
            <h2 className="text-3xl font-bold mb-2">
              {singleData.ProductName}
            </h2>
            <p className="text-xl text-green-600 font-semibold mb-4">
              ₹ {singleData.ProductPrice}
            </p>

            <p className="text-gray-700 mb-4">
              {singleData.ProductDescription}
            </p>

            {/* Size Options */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Select Size:</h3>
              <div className="flex gap-2">
                {singleData.ProductSizes &&
                  singleData.ProductSizes.map((value) => (
                    <label className="border px-4 py-1 rounded hover:bg-gray-200 cursor-pointer inline-block">
                      <input
                        type="radio"
                        name="size"
                        className="m-3"
                        value={value}
                        onChange={(e) => console.log(e.target.value)} // Optional handler
                      />
                      {value}
                    </label>
                  ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                onClick={() => {
                  dispatchProduct(addToCart(singleData));
                }}
              >
                Add to Cart
              </button>
              <button className="border border-red-500 text-red-500 px-6 py-2 rounded hover:bg-red-100 transition">
                Add to Wishlist
              </button>
            </div>

            <hr className="my-10" />

            <p className="text-gray-700 mb-4">
              <ul>
                <li>100% Original product.</li>
                <li>Cash on delivery is available on this product.</li>
                <li>Easy return and exchange policy within 7 days.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCollection;
