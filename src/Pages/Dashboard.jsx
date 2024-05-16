import React from "react";
import AdminDashboard from "../Components/AdminDashboard";
import UserDashboard from "../Components/UserDashboard";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("User"));
  return <>{user.role === "admin" ? <AdminDashboard /> : <UserDashboard />}</>;
};

export default Dashboard;
