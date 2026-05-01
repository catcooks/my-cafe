import React, { useState } from "react";
import SideBar from "./features/SideBar";
import DashBoard from "./features/View/DashBoard";
import Orders from "./features/View/Orders";
import Menu  from "./features/View/Menu";
import "./App.css";

const App: React.FC = () => {
  // 1. The state lives here now!
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "row", 
      width: "98vw", 
      minHeight: "99vh",
      boxSizing: "border-box",
      margin: 0,
      padding: 0
    }}>
      <SideBar 
        title="Cafe" 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      <div style={{ flexGrow: 1, padding: "20px" }}>
        {activeTab === "Dashboard" && <DashBoard />}
        {activeTab === "Orders" && <Orders />}
        {activeTab === "Menu" && <Menu />}
      </div>
    </div>
  );
};

export default App;