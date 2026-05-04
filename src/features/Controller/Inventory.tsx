import React from "react";
import { Settings, Trash2 as Trash } from "lucide-react";

interface InventoryItem {
  name: string;
  unit: string;
  price: string;
  stock: number;
  status: string;
}

interface InventoryTableProps {
  items: InventoryItem[];
}

export const InventoryTable: React.FC<InventoryTableProps> = ({ items }) => {
  return (
    <div style={{ border: "1px solid var(--border)", borderRadius: "12px", width: "100%", overflowY: "auto", maxHeight:"55vh" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "separate",
          borderSpacing: 0,
          textAlign: "left",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "var(--code-bg)" }}>
            <th style={headerStyle}>Item Name</th>
            <th style={headerStyle}>Unit</th>
            <th style={headerStyle}>Price</th>
            <th style={headerStyle}>Stock</th>
            <th style={headerStyle}>Status</th>
            <th style={{ ...headerStyle, textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={`${item.name}-${index}`} style={{ borderBottom: "1px solid var(--border)" }}>
              <td style={cellStyle}><strong>{item.name}</strong></td>
              <td style={cellStyle}>{item.unit}</td>
              <td style={cellStyle}>{item.price}</td>
              <td style={cellStyle}>{item.stock}</td>
              <td style={cellStyle}>
                <span 
                  style={{ 
                    color: item.stock === 0 ? "#ef4444" : item.stock < 10 ? "var(--accent)" : "#22c55e",
                    fontWeight: 600,
                    fontSize: "13px",
                    background: item.stock === 0 ? "rgba(147, 43, 43, 0.1)" : item.stock < 10 ? "var(--accent-bg)" : "rgba(34, 197, 94, 0.1)",
                    padding: "4px 10px",
                    borderRadius: "100px"
                  }}
                >
                  {item.status}
                </span>
              </td>
              <td style={{ ...cellStyle, textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
                  <button className="icon-btn" style={{ padding: "8px" }}><Settings size={16} color="var(--text)" opacity={0.6} /></button>
                  <button className="icon-btn" style={{ padding: "8px" }}><Trash size={16} color="#ef4444" opacity={0.8} /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const headerStyle: React.CSSProperties = {
  padding: "16px",
  position: "sticky",
  top: 0,
  zIndex: 1,
  backgroundColor: "var(--code-bg)",
  borderBottom: "2px solid var(--border)",
  fontSize: "14px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  opacity: 0.7
};

const cellStyle: React.CSSProperties = {
  padding: "16px",
  borderBottom: "1px solid var(--border)",
  fontSize: "14px",
  color: "var(--text-h)"
};
