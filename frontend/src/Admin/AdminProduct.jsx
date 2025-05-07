import React, { useEffect, useState } from "react";
import Left from "./Left";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const AdminProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/adminallproducts")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setProducts(result);
        console.log(result);
      });
  }, []);

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 w-11/12 mt-5">
        <Left />
        {/* Right */}
        <div className="w-2/3 flex items-center justify-center flex-col">
          <h1 className="text-4xl font-bold text-sky-600 my-4">
            Product Management👤
          </h1>
          <Link to={"/addadminproducts"}>
            <Button variant="contained" color="warning">
              Add Product Here ..😍
            </Button>
          </Link>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full my-8">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product Desc
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product Rating
                  </th>
                  <th scope="col" className="px-6 py-3">
                    BestSeller
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action-1
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action-2
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((item) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="p-4">
                      <img
                        src="/docs/images/products/apple-watch.png"
                        className="w-16 md:w-32 max-w-full max-h-full"
                        alt="Apple Watch"
                      />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {item.ProductName}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {item.ProductDescription}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {item.ProductPrice} ₹
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {item.ProductRating}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {item.ProductBestSeller ? "Yes" : "No"}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      <Button variant="contained" color="success">
                        Update
                      </Button>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      <Button variant="contained" color="error">
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProduct;
