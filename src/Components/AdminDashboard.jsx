import React from "react";
import AdminTab from "./AdminTab";

const AdminDashboard = () => {
  const User = JSON.parse(localStorage.getItem("User"));
  return (
    <>
      <div className="">
        <div className="flex flex-col justify-center items-center border-b-2 border-pink-600 min-w-full pb-2">
          <div className="w-[200px]">
            {" "}
            <img
              src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-853.jpg?t=st=1714980079~exp=1714983679~hmac=39f5d4fc99066a4d426a0ac0611da1930675ab941c33f5fd8185f971798a4173&w=740"
              alt=""
            />
          </div>
          <div className="text-center text-black">
            <h3 className="text-xl">{User.username}</h3>
            <p className="text-[18px]">{User.email}</p>
          </div>
        </div>
        <div className="">
          <AdminTab />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
