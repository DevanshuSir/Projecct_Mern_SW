import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Collection = () => {
  const [collection, setCollection] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");
    // console.log(token);

    fetch("/api/frotendproducts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token ?? "undefined"}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
        setCollection(result.data);

        if (result.message === "Successfully Send") {
          navigate("/collection");
        } else if (result.message === "No token provided") {
          navigate("/");
        } else if (result.message === "Invalid token or expired token") {
          toast.error(result.message);
        }
      });
  }, []);

  return (
    <div>
      <div>
        <div class="min-h-screen bg-gray-100 p-6">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* <!-- 🔹 Left Sidebar: Filters --> */}
            <div class="md:col-span-1 bg-white p-4 rounded-xl shadow">
              <h2 class="text-xl font-semibold mb-4">Filters</h2>

              {/* <!-- Category Filter --> */}
              <div class="mb-4">
                <h3 class="font-medium mb-2">Category</h3>
                <ul class="space-y-1">
                  <li>
                    <input type="checkbox" id="tshirt" class="mr-2" />
                    Men
                  </li>
                  <li>
                    <input type="checkbox" id="hoodie" class="mr-2" />
                    Women
                  </li>
                  <li>
                    <input type="checkbox" id="jeans" class="mr-2" />
                    Kids
                  </li>
                  <li>
                    <input type="checkbox" id="jeans" class="mr-2" />
                    Electronic
                  </li>
                </ul>
              </div>

              <button class="bg-blue-600 text-white px-4 py-2 rounded w-full mt-4">
                Apply Filters
              </button>
            </div>

            {/* <!-- 🔸 Right Side: Product Grid --> */}
            <div class="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* <!-- Product Card --> */}
              {collection.map((product) => (
                <Link to={`/singlecollection/${product._id}`}>
                  <div class="bg-white rounded-xl shadow p-4">
                    <img
                      src={`/uploads/${product.ProductImage}`}
                      alt="Product"
                      class="w-full h-auto object-fill rounded-md mb-3"
                    />
                    <h3 class="text-lg font-semibold">{product.ProductName}</h3>
                    <p class="text-gray-600">{product.ProductDescription}</p>
                    <p class="text-blue-600 font-bold mt-2">
                      ₹ {product.ProductPrice}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
