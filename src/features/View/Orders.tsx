import React, { useState } from "react";
import MenuItem from "../../components/MenuItem";
import { useMenu } from "../../hooks/Menu";
import { CurrentOrder } from "../Controller/Orders";

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
    <div style={{ width: "100%" }}>
      <h1 style={{ fontSize: "40px", padding: "15px", marginBottom: "0px"}}>
        Orders
      </h1>
      
      <div style={{ 
        display:"flex",
        gap: "24px", 
        margin: "10px",
        alignItems: "start"

      }}>
        <div style={{width:"65%"}}>
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
              overflowY: "auto", 
              maxHeight:"300px"
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
          <CurrentOrder 
            orderItems={orderItems}
            handleIncreaseQuantity={handleIncreaseQuantity}
            handleDecreaseQuantity={handleDecreaseQuantity}
            totalPrice={totalPrice}
            style={{ width:"100%", maxHeight: "70vh" }}
          />
      </div>
    </div>
  );
};

export default Orders;