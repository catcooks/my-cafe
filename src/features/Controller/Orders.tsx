import React from "react";
import { Plus, Minus } from "lucide-react";

interface OrderItem {
  name: string;
  price: number | string;
  quantity: number;
}

interface CurrentOrderProps {
  orderItems: OrderItem[];
  handleIncreaseQuantity: (name: string) => void;
  handleDecreaseQuantity: (name: string) => void;
  totalPrice: number;
  style?: React.CSSProperties;
}

export const CurrentOrder: React.FC<CurrentOrderProps> = ({
  orderItems,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  style,
  totalPrice,
}) => {
  return (
    <div className="card" style={{ display: "flex", flexDirection: "column", ...style}}>
      <div style={{ display: "flex", justifyContent: "space-between", width:"100%", borderBottom:"1px solid #737373"  }}>
        <h2 style={{ margin: 0, fontSize: "20px", color: "var(--text-h)"}}>Current Order</h2>
        <span style={{ fontSize: "10px", opacity: 0.5 }}>#1234</span>
      </div>

      <div 
        style={{ 
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          width:"100%"
        }}
      >
        {orderItems.length === 0 ? (
          <div style={{display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.3,width:"100%" }}>
            <p>No items in order</p>
          </div>
        ) : (
          orderItems.map((item, index) => (
            <div 
              key={`${item.name}-${index}`}
              style={{ 
                display: "flex", 
                flexDirection:"column",
                alignItems: "center",
                margin:"3px",
                padding: "5px",
                background: "var(--accent-bg)",
                borderRadius: "12px",
                border: "1px solid var(--accent-border)",
                
              }}
            >
              <div style={{ display: "flex", justifyContent:"space-between", width:"100%" }}>
                <span style={{ fontWeight: 600, fontSize: "12px", padding:"2px 0px", lineHeight:"2ch" }}>{item.name}</span>
                <span style={{ fontWeight: 600, color: "var(--accent)", fontSize:"12px", padding:"2px 0px", lineHeight:"2ch"}}>₱{(Number(item.price) * item.quantity).toFixed(2)}</span>
              </div>
              <div style={{ display: "flex",width:"100%",justifyContent:"space-between" , padding:"0px"}}>
                <span style={{ fontSize: "10px", opacity: 0.6, padding:"0px", margin:"-5px 0px" }}>qty. {item.quantity}</span>
                <div style={{ display: "flex", padding:"0px" }}>
                  
                  <button 
                    className="icon-btn" 
                    onClick={() => handleDecreaseQuantity(item.name)}
                    style={{ padding: "4px" }}
                  >
                    <Minus size={14} color="var(--accent)" />
                  </button>
                  <button 
                    className="icon-btn" 
                    onClick={() => handleIncreaseQuantity(item.name)}
                    style={{ padding: "4px" }}
                  >
                    <Plus size={14} color="var(--accent)" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1px", marginTop: "auto", width:"100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <span style={{ fontWeight: 700, fontSize: "15px" }}>Total</span>
          <span style={{ fontWeight: 700, fontSize: "15px", color: "var(--accent)" }}>₱{totalPrice.toFixed(2)}</span>
        </div>
        <button style={{ width: "100%", padding: "0px", borderRadius: "12px" }}>
          Process Payment
        </button>
      </div>
    </div>
  );
};
