import React, { useContext } from "react";
import Card from "../Components/Card";
// import { BookData } from "../Bookdata";
import { MyContext } from "../Context/MyContext";

const Books = () => {
  const { Books } = useContext(MyContext);

  return (
    <>
      <div className="mt-6">
        <div className="flex flex-col items-center justify-center text-center w-[70%] mx-auto space-y-4">
          <h3 className="text-2xl font-bold">Paid Offered Courses</h3>
          <p className="text-[18px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit,
            commodi! Praesentium quia voluptate impedit expedita nisi tempora
            dolorum facere molestiae illo neque, rerum rem repellendus, soluta
            magnam obcaecati placeat dicta enim ipsa labore. Natus tempora,
            dolorum sapiente impedit voluptate, unde repellendus temporibus
            culpa odio, quisquam quam odit nemo veniam amet.
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 transition-all duration-300 delay-100 text-white p-3 rounded-md">
            Get Started
          </button>
          <></>
        </div>
        <div className="m-5 ml-10 sm:ml-10 mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
          {Books.map((book) => {
            return <Card key={book.id} book={book} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Books;
