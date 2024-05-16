import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import toast from "react-hot-toast";
import { FaShoppingCart } from "react-icons/fa";
import Login from "./Login";
import { useSelector } from "react-redux";

const Navbar = () => {
  const User = JSON.parse(localStorage.getItem("User"));
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("User");
    toast.success("User Logout Successfully");
    navigate("/");
  };
  return (
    <>
      <div className="navbar bg-neutral text-neutral-content">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 bg-gray-400 text-white"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/books"}>Books</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl ">BookStore</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 btn btn-ghost ">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/books"}>Books</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-6 items-center ">
          <NavLink to={"/cart"}>
            {User && (
              <span className="rounded-full bg-pink-600 px-1 absolute top-1 right-[138px] text-white ">
                {cartItems.length}
              </span>
            )}
            <FaShoppingCart
              size={28}
              className="hover:text-white transition-all duration-200 delay-100"
            />
          </NavLink>
          {!User ? (
            <div>
              <a
                className="btn"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </a>
              <Login />
            </div>
          ) : (
            <div className="flex items-center justify-center gap-5">
              <NavLink to={"/dashboard"}>
                <FaCircleUser size={28} />
              </NavLink>

              <button
                onClick={() => handleLogout()}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
