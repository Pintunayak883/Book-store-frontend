import React, { useContext } from "react";
import AddressModal from "./AddressModal";
import { MyContext } from "../Context/MyContext";

const UserDashboard = () => {
  const { address, Orders } = useContext(MyContext);

  return (
    <div className="md:flex justify-between block">
      {/* Address Side */}
      <div className="md:w-1/2 w-full p-4">
        <h2 className="text-lg font-semibold mb-4">User Address</h2>
        <div className="flex items-center justify-center md:h-[50%]">
          {address ? (
            <p>{address}</p>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Add Address
              <AddressModal />
            </button>
          )}
        </div>
      </div>

      {/* Orders Side */}
      <div
        className="md:w-1/2 w-full p-4"
        style={{ overflowY: "auto", maxHeight: "80vh" }}
      >
        <h2 className="text-lg font-semibold mb-4">User Orders</h2>
        {Orders.length > 0 ? (
          <div>
            {Orders.map((order, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded p-4 mb-4"
              >
                <h3 className="text-lg font-semibold mb-2">
                  Order #{index + 1}
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {/* Items */}
                  <div>
                    <h4 className="font-semibold mb-2">Items</h4>
                    <ul>
                      {order.products.map((product, idx) => (
                        <li className="py-5" key={idx}>
                          {product.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Images */}
                  <div>
                    <h4 className="font-semibold mb-2">Images</h4>
                    <ul>
                      {order.products.map((product, idx) => (
                        <li key={idx} className="py-2">
                          <img
                            src={product.img}
                            alt={`Product ${idx + 1}`}
                            className="w-16 h-16"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Quantities and Prices */}
                  <div>
                    <h4 className="font-semibold mb-2">Quantity & Price</h4>
                    <ul>
                      {order.products.map((product, idx) => (
                        <li className="py-5" key={idx}>
                          {product.qty} x ${product.price}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No orders yet!</p>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
