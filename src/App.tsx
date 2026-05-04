import React, { useState } from "react";
import SideBar from "./features/SideBar";
import DashBoard from "./features/View/DashBoard";
import Orders from "./features/View/Orders";
import Inventory from "./features/View/Inventory";
import Products from "./features/View/Products";
import Staff from "./features/View/Staff";
import Reservations from "./features/View/Reservations";
import Tables from "./features/View/Tables";
import "./App.css";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="app-container">
      <SideBar
        title="Cafe"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="main-content">
        {activeTab === "Dashboard" && <DashBoard />}
        {activeTab === "Orders" && <Orders />}
        {activeTab === "Inventory" && <Inventory />}
        {activeTab === "Products" && <Products />}
        {activeTab === "Staff" && <Staff />}
        {activeTab === "Reservations" && <Reservations />}
        {activeTab === "Tables" && <Tables />}
      </div>
    </div>
  );
};

export default App;