import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { Link } from "react-router-dom";

const BestSeller = () => {
  const [best, setBest] = useState([]);

  useEffect(() => {
    fetch("/api/bestsellerdata")
      .then((res) => {
        return res.json();
      })
      .then((record) => {
        setBest(record.data);
      });
  }, []);

  return (
    <div>
      <div class="min-h-40 bg-gray-100 p-6">
        <Title text_one={"Best"} text_two={"Seller"} />
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {best.map((items) => (
              <Link to={`/singlecollection/${items._id}`}>
                <div class="bg-white rounded-xl shadow p-4">
                  <img
                    src={`/uploads/${items.ProductImage}`}
                    alt="Product"
                    class="w-full h-auto object-fill rounded-md mb-3"
                  />
                  <h3 class="text-lg font-semibold">{items.ProductName}</h3>
                  <p class="text-gray-600">{items.ProductDescription}</p>
                  <p class="text-blue-600 font-bold mt-2">
                    ₹ {items.ProductPrice}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
