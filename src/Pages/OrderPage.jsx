import React from "react";
import { NavLink } from "react-router-dom";

const OrderPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/order-confirmed-7464607-6110040.png?f=webp"
          alt=""
        />
        <NavLink
          to={"/"}
          className="bg-pink-500 hover:bg-pink-600 text-white rounded-md px-2 py-1"
        >
          Go Back{" "}
        </NavLink>
      </div>
    </>
  );
};

export default OrderPage;
