import React from "react";

const Banner = () => {
  return (
    <>
      <div className="container max-w-[1536px] flex md:flex-row flex-col-reverse">
        <div className="md:w-1/2 w-full p-8 space-y-6">
          <h2 className="sm:text-5xl text-3xl font-bold text-black">
            Hello, welcomes here to learn something{" "}
            <span className="text-pink-600">new everyday!!!</span>
          </h2>
          <p className="text-[18px] font-semibold text-black">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
            tenetur, officiis amet reprehenderit sint magnam culpa dolorem
            dolores ex voluptate sed ea aut commodi iusto cum est voluptatibus
            error placeat.
          </p>
          <div className="border p-2 rounded-md bg-white">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow outline-none bg-transparent"
                placeholder="Email"
              />
            </label>
          </div>
          <div>
            <button className="bg-pink-500 hover:bg-pink-600 transition-all duration-300 delay-100 text-white p-3 rounded-md">
              Get Started
            </button>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <div className=" flex items-center justify-center">
            <img src="/images/banner.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
