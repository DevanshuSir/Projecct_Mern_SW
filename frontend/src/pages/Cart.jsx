import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartTotal, deleteCartValue } from "../features/cartslice/CartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartValue = useSelector((state) => state.Cart.cart);
  const TotalValue = useSelector((state) => state.Cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartTotal());
  });

  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

        {cartValue.length == 0 ? (
          <>
            <h1 className="text-center text-3xl font-bold">
              You Cart Is Empty..🛒
            </h1>
            <p className="text-center text-blue-600 text-xl">
              {" "}
              <Link to={"/collection"}>Continue Shopping</Link>
            </p>
          </>
        ) : (
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
            {/* Cart Item 1 */}
            {cartValue.map((value, index) => (
              <div
                className="flex items-center justify-between border-b py-4"
                key={index}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={`/uploads/${value.ProductImage}`}
                    alt="Product"
                    className="w-20 h-20 object-contain rounded"
                  />
                  <div>
                    <h2 className="font-semibold text-lg">
                      {value.ProductName}
                    </h2>
                    <p className="text-sm text-gray-500">
                      ₹{value.ProductPrice}
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <p>Qty: {value.quantity}</p>
                  <p className="font-semibold">
                    ₹{value.quantity * value.ProductPrice}
                  </p>
                </div>

                <button
                  className="text-red-500 hover:text-red-700 transition"
                  onClick={() => {
                    dispatch(deleteCartValue(value._id));
                  }}
                >
                  Delete
                </button>
              </div>
            ))}

            {/* Total & Checkout */}
            <div className="text-right mt-6">
              <h2 className="text-xl font-bold">
                Total Product Qty : {TotalValue.Quantity}
              </h2>
              <h2 className="text-xl font-bold">
                Total Price : ₹{TotalValue.Price}
              </h2>
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
