import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../Redux/CartSlice";
import { FaTrashAlt } from "react-icons/fa";
import { MyContext } from "../Context/MyContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BaseURl } from "../utils/BaseUrl";

const Cart = () => {
  const { address } = useContext(MyContext);
  const user = JSON.parse(localStorage.getItem("User"));
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const taxes = subtotal * 0.05; // Assuming 5% tax rate
  const shipping = 2; // Fixed shipping charge

  const total = subtotal + taxes + shipping;

  const handleCheckOut = () => {
    try {
      if (!address) {
        toast.error("Please Set Address.");
        navigate("/cart");
      } else {
        var options = {
          key: "rzp_test_g6Nb9tSMYV9obx",
          key_secret: "eK7SfFQQGIdPvB2oHaBKjTnW",
          amount: parseInt(total * 100),
          currency: "INR",
          order_receipt: "order_rcptid_" + user.name,
          name: "BookStore",
          description: "for testing purpose",
          handler: function (response) {
            // console.log(response)
            localStorage.removeItem("cart");
            toast.success("Order Placed Successfully.");
            setTimeout(() => {
              navigate("/order");
              window.location.reload();
            }, 2000);

            const paymentId = response.razorpay_payment_id;
            try {
              const order = async () => {
                try {
                  const orderItems = cartItems.map((item) => ({
                    name: item.name,
                    img: item.img,
                    price: item.price,
                    qty: item.quantity,
                  }));
                  const res = await axios.post(`${BaseURl}/order`, {
                    products: orderItems,
                    total: total,
                    CName: user.username,
                    Address: address,
                    PaymentId: paymentId,
                  });
                  console.log(res);
                } catch (error) {
                  console.log(error);
                }
              };
              order();
            } catch (error) {
              console.log(error);
            }
          },
          theme: {
            color: "#3399cc",
          },
        };
        var pay = new window.Razorpay(options);
        pay.open();
        console.log(pay);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen py-8">
        {cartItems.length === 0 || !user ? (
          <div className="flex items-center justify-center">
            <img
              src="https://cdni.iconscout.com/illustration/free/thumb/free-empty-cart-4085814-3385483.png"
              alt=""
            />
          </div>
        ) : (
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left font-semibold">Product</th>
                      <th className="text-left px-8 font-semibold">Quantity</th>
                      <th className="text-left font-semibold">Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  {cartItems.map((item) => (
                    <tbody key={item._id}>
                      <tr>
                        <td className="py-4">
                          <div className="flex items-center">
                            <img
                              className="h-16 w-16 mr-4"
                              src={item.img}
                              alt={item.name}
                            />
                            <div>
                              <span className="font-semibold block">
                                {item.name}
                              </span>
                              <span className="text-gray-500 block">
                                ${item.price.toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </td>

                        <td className="py-4">
                          <div className="flex items-center">
                            <button
                              className="border rounded-md py-2 md:px-4 px-2 mr-2"
                              onClick={() => handleDecreaseQuantity(item._id)}
                            >
                              -
                            </button>
                            <span className="text-center md:w-8 w-4">
                              {item.quantity}
                            </span>
                            <button
                              className="border rounded-md py-2 md:px-4 px-2 ml-2"
                              onClick={() => handleIncreaseQuantity(item._id)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-4">
                          ${(item.price * item.quantity).toFixed(2)}
                        </td>
                        <td className="py-4">
                          <button
                            onClick={() => handleRemoveItem(item._id)}
                            className="text-red-500"
                          >
                            <FaTrashAlt />
                          </button>
                        </td>
                      </tr>
                      {/* More product rows */}
                    </tbody>
                  ))}
                </table>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Taxes</span>
                  <span>${taxes.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">${total.toFixed(2)}</span>
                </div>
                <button
                  onClick={handleCheckOut}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
