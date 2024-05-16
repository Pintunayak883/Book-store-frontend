import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BaseURl } from "../utils/BaseUrl";
import toast from "react-hot-toast";

const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setproduct] = useState({
    name: "",
    img: "",
    category: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setproduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };
  useEffect(() => {
    const getBook = async (id) => {
      try {
        const res = await axios.get(`${BaseURl}/get/${id}`);
        setproduct(res.data.book);
      } catch (error) {
        console.log(error);
      }
    };
    getBook(id);
  }, []);

  const UpdateBook = async () => {
    try {
      const res = await axios.put(`${BaseURl}/update/${id}`, product);
      if (res.data) {
        toast.success(res.data.message);
      }
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto">
        <form
          // onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Product Id
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent border-gray-300"
              id="name"
              type="text"
              name="id"
              placeholder="Product Name"
              value={product._id}
              disabled
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent border-gray-300"
              id="name"
              type="text"
              name="name"
              placeholder="Product Name"
              value={product.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="img"
            >
              Image URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent border-gray-300"
              id="img"
              type="text"
              name="img"
              placeholder="Image URL"
              value={product.img}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent border-gray-300"
              id="category"
              type="text"
              name="category"
              placeholder="Category"
              value={product.category}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent border-gray-300"
              id="description"
              name="description"
              placeholder="Description"
              value={product.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent border-gray-300"
              id="price"
              type="text"
              name="price"
              placeholder="Price"
              min="0"
              step="0.01"
              value={product.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={() => UpdateBook()}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update Book
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateBook;
