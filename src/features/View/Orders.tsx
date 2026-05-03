import React, { useState } from "react";
import MenuItem from "../../components/MenuItem"; // adjust path if needed
import { useMenu } from "../../hooks/Menu"; // Importing your custom hook
import { Plus, Minus } from "lucide-react";
interface OrderItem {
  name: string;
  price: number | string;
  quantity: number;
}

const Orders: React.FC = () => {
  const { menuData, loading, getIcon } = useMenu();
  
  const [activeCategory, setActiveCategory] = useState("All");
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  const categories = ["All", "Coffee", "Pastry", "Dessert", "Food", "Tea", "Non-Coffee"];

  const filteredMenu = activeCategory === "All" 
    ? menuData 
    : menuData.filter((item: any) => item.category === activeCategory);

  const handleAddToOrder = (item: any) => {
    setOrderItems((prevOrders) => {
      const existingItem = prevOrders.find((orderItem) => orderItem.name === item.name);
      
      if (existingItem) {
        return prevOrders.map((orderItem) =>
          orderItem.name === item.name
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        );
      } else {
        return [...prevOrders, { name: item.name, price: item.price, quantity: 1 }];
      }
    });
  };

  const handleDecreaseQuantity = (name: string) => {
    setOrderItems((prevOrders) =>
      prevOrders
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleIncreaseQuantity = (name: string) => {
    setOrderItems((prevOrders) =>
      prevOrders.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const totalPrice = orderItems.reduce((total, item) => {
    const itemPrice = typeof item.price === 'string' ? parseFloat(item.price) : item.price;
    return total + (itemPrice * item.quantity);
  }, 0);

  return (
    <div style={{ width: "100%", flex: 1, boxSizing: "border-box" }}>
      <h1 style={{ fontSize: "40px", padding: "15px", marginBottom: "0px" }}>
        Orders
      </h1>
      
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "minmax(0, 1fr) 350px", 
        gap: "20px", 
        margin: "10px",
        alignItems: "start" 
      }}>
        <div>
          <nav 
            className="filter" 
            style={{
              display: "flex", 
              overflowX: "auto", 
              whiteSpace: "nowrap", 
              gap: "16px", 
              borderBottom: "1px solid var(--border)", 
              paddingBottom: "10px"
            }}
          >
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  backgroundColor: activeCategory === cat ? "var(--accent)" : "transparent",
                  color: activeCategory === cat ? "white" : "var(--text)",
                  border: activeCategory === cat ? "none" : "1px solid var(--border)",
                  padding: "6px 16px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
              >
                {cat}
              </button>
            ))}
          </nav>

          <div className="card-container" 
            style={{
              margin: "20px 0",
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              width: "100%",
              overflowY: "auto", 
              maxHeight:"320px"
            }}
          >
            {loading ? (
              <p style={{ color: "var(--text)" }}>Loading menu...</p>
            ) : (
              filteredMenu.map((item: any, index: number) => (
                <MenuItem 
                  key={`${item.name}-${index}`}
                  title={item.name} 
                  icon={getIcon(item.category)} 
                  num={item.price} 
                  style={{ margin: 0 }} 
                  onClick={() => handleAddToOrder(item)} 
                />
              ))
            )}
          </div>
        </div>
        <div className="card" style={{ 
          width: "100%", 
          padding: "15px",
          boxSizing: "border-box", 
        }}>
          <div style={{margin: "0px", justifyContent:"space-between", display:"flex", width:"100%"}}> 
            <h1 style={{margin:"0px", fontSize: "32px",  paddingBottom:"5px", border:"0px" }}>Current Order</h1>
            <p style={{ marginTop: "0px", fontSize: "12px", color: "gray", paddingBottom:"0px" }}>#1234</p>
          </div>

          <div style={{ 
            borderTop: "1px solid var(--border)", 
            borderBottom: "1px solid var(--border)", 
            width: "100%", 
            minHeight:"250px",
            maxHeight:"270px", 
            overflowY: "auto", 
            marginTop: "10px",
          }}>
            {orderItems.map((orderItem, index) => (
              <div key={index} style={{ display: "flex", justifyContent: "space-between", border:"1px solid #e2e2e2", borderRadius:"10px", margin:"5px", padding:"0px 15px 10px 10px" }}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                  <p style={{ margin: "5px 0" }}>{orderItem.name}</p>
                  <p style={{ margin: "-10px 0", fontSize:"12px" }}>qty. {orderItem.quantity}</p>
                </div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
                  <p style={{ margin: "5px 0" }}>₱{(Number(orderItem.price) * orderItem.quantity).toFixed(2)}</p>
                  <div style={{display:"flex", justifyContent:"space-between"}}>
                    <button className="icon-btn" onClick={() => handleDecreaseQuantity(orderItem.name)}><Minus size={14} color="#ff7676"/></button>
                    <button className="icon-btn" onClick={() => handleIncreaseQuantity(orderItem.name)}><Plus size={14} color="#99ff6d"/></button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ justifyContent:"space-between", display: "flex", width: "100%", fontWeight: "bold", fontSize: "18px" }}>
            <p style={{padding:"0px", margin:"0px"}}>Total</p>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
              <p style={{padding:"0px", margin:"0px"}}>₱{totalPrice.toFixed(2)}</p>
              <button style={{padding:"3%", borderRadius:"10px", whiteSpace:"nowrap" }}>Process Payment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;