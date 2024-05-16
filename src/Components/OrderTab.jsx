import React, { useContext } from "react";
import { MyContext } from "../Context/MyContext";

const OrderTable = () => {
  const { Orders } = useContext(MyContext);
  console.log(Orders);
  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border border-gray-400 w-full text-black">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">Order ID</th>
            <th className="border border-gray-400 px-4 py-2">Image</th>
            <th className="border border-gray-400 px-4 py-2">Title</th>
            <th className="border border-gray-400 px-4 py-2">Price</th>
            <th className="border border-gray-400 px-4 py-2">Quantity</th>
            <th className="border border-gray-400 px-4 py-2">Total Price</th>
            <th className="border border-gray-400 px-4 py-2">Customer Name</th>
            <th className="border border-gray-400 px-4 py-2">Address</th>
            <th className="border border-gray-400 px-4 py-2">PaymentId</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {Orders.map((order) => (
            <React.Fragment key={order._id}>
              {order.products.map((product, index) => (
                <tr key={`${order._id}-${index}`}>
                  <td className="border border-gray-400 px-4 py-2">
                    {order._id.slice(-5)}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    <img
                      src={product.img}
                      alt="Product"
                      className="w-16 h-16"
                    />
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {product.name}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {product.qty}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    ${(product.qty * product.price).toFixed(2)}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {order.CName}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {order.Address}
                  </td>
                  <td className="border-t border-gray-400 px-4 py-2 ">
                    {order.PaymentId}
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
