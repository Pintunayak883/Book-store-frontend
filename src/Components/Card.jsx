import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/CartSlice";
import toast from "react-hot-toast";
const Card = ({ book }) => {
  const dispatch = useDispatch();
  const User = JSON.parse(localStorage.getItem("User"));
  const handleAddToCart = () => {
    if (User) {
      dispatch(addItem(book));
      toast.success("Item add in cart");
    } else {
      toast.error("Please login first");
    }
  };
  return (
    <>
      <div className="card md:w-96 w-80 bg-base-100 shadow-xl mt-3">
        <figure className="h-[300px] flex items-center justify-center">
          <img src={book.img} alt={book.name} className="h-full w-auto py-1" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {book.name}
            <div className="badge badge-secondary">{book.category}</div>
          </h2>
          <p>{book.description.slice(0, 30)}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${book.price}</div>
            <div
              onClick={handleAddToCart}
              className="border rounded-full px-2 py-1 hover:bg-pink-600 hover:text-white cursor-pointer"
            >
              Add to Cart
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
