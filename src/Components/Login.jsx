import React, { useContext, useState } from "react";
import axios from "axios";
import { BaseURl } from "../utils/BaseUrl";
import toast from "react-hot-toast";
import { TailSpin } from "react-loader-spinner";
import { MyContext } from "../Context/MyContext";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { isLoading, setisLoading } = useContext(MyContext);

  const [User, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!isLogin) {
        try {
          setisLoading(true);
          const res = await axios.post(`${BaseURl}/register`, {
            username: User.username,
            email: User.email,
            password: User.password,
          });
          setisLoading(false);
          if (res.data) {
            toast.success(res.data.message);
          }
          setTimeout(() => {
            setIsLogin(true);
          }, 2000);
        } catch (error) {
          setisLoading(false);
          toast.error(error);
        }
      } else {
        try {
          setisLoading(true);
          const res = await axios.post(`${BaseURl}/login`, {
            email: User.email,
            password: User.password,
          });
          setisLoading(false);
          if (res.data) {
            toast.success(res.data.message);
          }
          localStorage.setItem("User", JSON.stringify(res.data.user));
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } catch (error) {
          setisLoading(false);
          toast.error(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form
            onSubmit={handleSubmit}
            action="post"
            className="p-5 space-y-5 text-center"
          >
            {!isLogin && (
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
                  />
                </svg>
                <input
                  type="text"
                  name="username"
                  className="grow"
                  placeholder="Username"
                  value={User.username}
                  onChange={handleChange}
                />
              </label>
            )}

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
                />
                <path
                  fillRule="evenodd"
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
                />
              </svg>
              <input
                type="text"
                name="email"
                className="grow"
                placeholder="Email"
                value={User.email}
                onChange={handleChange}
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                name="password"
                className="grow"
                placeholder="Password"
                value={User.password}
                onChange={handleChange}
              />
            </label>

            {/* Conditional rendering of login/signup button or spinner */}
            {isLoading ? (
              <button className="bg-pink-500 hover:bg-pink-600 transition-all duration-300 delay-100 text-white p-3 rounded-md">
                <TailSpin color="#fff" height={20} width={20} />
              </button>
            ) : (
              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 transition-all duration-300 delay-100 text-white p-3 rounded-md"
              >
                {isLogin ? "Login" : "Signup"}
              </button>
            )}

            <div className=" flex justify-end ">
              <h4>
                {isLogin
                  ? "Don't have an account yet?"
                  : "Already have an account?"}{" "}
                <span
                  className="underline text-blue-500 cursor-pointer"
                  onClick={toggleForm}
                >
                  {isLogin ? "Signup" : "Login"}
                </span>
              </h4>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Login;
