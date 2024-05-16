import React, { useContext } from "react";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import { MyContext } from "../Context/MyContext";
import axios from "axios";
import { BaseURl } from "../utils/BaseUrl";
import toast from "react-hot-toast";
import { NavLink, Navigate, useNavigate } from "react-router-dom";

const ProductTable = () => {
  const { Books } = useContext(MyContext);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${BaseURl}/delete/${id}`);
      if (res.data) {
        toast.success(res.data.message);
      }
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border border-gray-400 w-full text-black">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">ID</th>
            <th className="border border-gray-400 px-4 py-2">Image</th>
            <th className="border border-gray-400 px-4 py-2">Name</th>
            <th className="border border-gray-400 px-4 py-2">Category</th>
            <th className="border border-gray-400 px-4 py-2">Description</th>
            <th className="border border-gray-400 px-4 py-2">Price</th>
            <th className="border border-gray-400 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {Books.map((product) => (
            <tr key={product.id}>
              <td className="border border-gray-400 px-4 py-2">
                {product._id.slice(-5)}
              </td>

              <td className="border border-gray-400 px-4 py-2 flex justify-center items-center">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-16 h-16"
                />
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {product.name}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {product.category}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {product.description.slice(0, 11)}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                ${product.price}
              </td>
              <td className="border-b border-gray-400 px-4 py-2 flex justify-center items-center">
                <NavLink to={`/edit/${product._id}`}>
                  <RiEdit2Line
                    className="text-blue-500 cursor-pointer hover:text-blue-700"
                    style={{
                      width: "24px",
                      height: "24px",
                      marginRight: "0.5rem",
                    }}
                  />
                </NavLink>
                <RiDeleteBin6Line
                  onClick={() => handleDelete(product._id)}
                  className="text-red-500 cursor-pointer hover:text-red-700"
                  style={{ width: "24px", height: "24px" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
