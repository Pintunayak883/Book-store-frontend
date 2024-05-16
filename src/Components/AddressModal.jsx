import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { BaseURl } from "../utils/BaseUrl";
const AddressModal = () => {
  const User = JSON.parse(localStorage.getItem("User"));
  const [address, setAddress] = useState("");

  const id = User._id;
  const handleAddress = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`${BaseURl}/address/${id}`, { address });
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
    <>
      <dialog id="my_modal_5" className="modal modal-middle ">
        <div className="modal-box bg-gray-600">
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
          <form onSubmit={handleAddress}>
            <div className="py-4">
              <label htmlFor="address" className="block font-bold mb-1">
                Address:
              </label>
              <textarea
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="input"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn bg-pink-500 hover:bg-pink-600 text-gray-300 transition-all duration-100 delay-300 border-none"
            >
              Add Address
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default AddressModal;
