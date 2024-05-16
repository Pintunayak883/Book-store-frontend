import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { BaseURl } from "../utils/BaseUrl";
export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [Books, setBooks] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [address, setAddress] = useState("");
  const [Orders, setOrders] = useState([]);
  const User = JSON.parse(localStorage.getItem("User"));

  useEffect(() => {
    const getBooks = async () => {
      try {
        const books = await axios.get(`${BaseURl}/get`);
        setBooks(books.data.books);
      } catch (error) {
        console.log(error);
      }
    };

    const getAddress = async (id) => {
      try {
        const res = await axios.get(`${BaseURl}/address/${id}`);
        setAddress(res?.data?.address);
      } catch (error) {
        console.log(error);
      }
    };

    const GetAllOrders = async () => {
      try {
        const res = await axios.get(`${BaseURl}/getorder`);
        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAddress(User?._id);
    getBooks();
    GetAllOrders();
  }, []);

  return (
    <MyContext.Provider
      value={{ Books, isLoading, setisLoading, address, Orders }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
