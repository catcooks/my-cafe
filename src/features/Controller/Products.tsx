import React from "react";
import { Settings } from "lucide-react";
import type { MenuItemData } from "../../hooks/Menu";

interface ProductDetailsProps {
  item: MenuItemData | null;
  style?: React.CSSProperties;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ item,style }) => {
  if (!item) {
    return (
      <div className="card" style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.3, ...style }}>
        <p>Select a dish to view details</p>
      </div>
    );
  }

  return (
    <div className="card" style={{ display: "flex", flexDirection: "column", ...style }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start",width:"100%" }}>
        <h1 style={{ margin: 0, fontSize: "32px", color: "var(--text-h)", border: "none", padding: 0 }}>{item.name}</h1>
        <button className="icon-btn" style={{ padding: "8px" }}><Settings size={20} /></button>
      </div>
      <div>
        <div>
          <label style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", opacity: 0.5, fontWeight: 700 }}>Price</label>
          <p style={{ margin: "4px", fontSize: "20px", fontWeight: 600, color: "var(--accent)" }}>₱{item.price}</p>
        </div>

        <div>
          <label style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", opacity: 0.5, fontWeight: 700 }}>Description</label>
          <p style={{ margin: "4px", fontSize: "14px", lineHeight: "1.6", textAlign: "left",maxWidth: "25ch",hyphens: "auto" }}>
            {item.discription || "No description available."}
          </p>
        </div>

        <div>
          <label style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", opacity: 0.5, fontWeight: 700 }}>Ingredients</label>
          <div style={{ display: "flex", flexWrap: "wrap", marginTop: "8px" }}>
            {item.ingredients ? (
              Object.entries(item.ingredients).map(([key, value]) => (
                <div
                  key={key}
                  style={{
                    background: "var(--code-bg)",
                    padding: "3px 4px",
                    margin:"2px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    border: "1px solid var(--border)"
                  }}
                >
                  <span style={{ opacity: 0.7 }}>{key}:</span> {value}
                </div>
              ))
            ) : (
              <p style={{ margin: 0, fontSize: "14px", opacity: 0.5 }}>None listed.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
