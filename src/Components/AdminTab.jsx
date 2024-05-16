import React from "react";
import { NavLink } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProductTable from "./ProductTable";
import OrderTable from "./OrderTab";
const AdminTab = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-end mr-4 py-2">
          <NavLink
            to={"/add"}
            className="px-3 py-2 bg-blue-600 rounded-md text-white"
          >
            Add Product
          </NavLink>
        </div>
        <Tabs className="my-3">
          <TabList className="flex">
            <Tab className="w-1/2 text-center py-2 px-4 bg-gray-200 hover:bg-gray-300 cursor-pointer">
              Products
            </Tab>
            <Tab className="w-1/2 text-center py-2 px-4 bg-gray-200 hover:bg-gray-300 cursor-pointer">
              Orders
            </Tab>
          </TabList>

          <TabPanel>
            <ProductTable />
          </TabPanel>
          <TabPanel>
            <OrderTable />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default AdminTab;
