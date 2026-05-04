import { useState } from "react";
import inventory from "../../../public/inventory.json";
import { InventoryTable } from "../Controller/Inventory";

const Inventory: React.FC = () => {
  const [items] = useState(inventory);
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ width: "100%", maxWidth: "1400px", boxSizing: "border-box" }}>
      <h1 style={{ fontSize: "40px", padding: "15px", marginBottom: "13px" }}>
        Inventory
      </h1>
      
      <div
        className="card"
        style={{
          width: "100%",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }}
      >
        <div style={{ width: "100%", }}>
          <input
            type="text"
            placeholder="Search inventory..."
            style={{ padding: "12px 24px", margin: 0 }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <InventoryTable items={filteredItems} />
      </div>
    </div>
  );
};

export default Inventory;