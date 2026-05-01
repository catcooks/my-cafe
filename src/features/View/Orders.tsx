import Card from "../../components/Card";
import { Coffee, Utensils, Wheat } from "lucide-react";

const Orders: React.FC = () => {
  return (
    <div style={{ width: "100%", flex: 1, boxSizing: "border-box" }}>
      <h1 style={{ fontSize: "40px", padding: "15px", marginBottom: "0px" }}>
        Orders
      </h1>
      
      {/* 
        THE FIX: CSS Grid instead of Flexbox. 
        "minmax(0, 1fr)" safely takes up remaining space without blowing out.
        "350px" locks the right column to exactly 350px.
      */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "minmax(0, 1fr) 350px", 
        gap: "20px", 
        margin: "10px",
        alignItems: "start" // Prevents the right card from stretching vertically to match the left side
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
            <button>All</button>
            <button>Coffee</button>
            <button>Pastry</button>
            <button>Sandwich</button>
            <button>Tea</button>
          </nav>

          <div className="card-container" 
            style={{
              margin: "20px 0",
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              width: "100%",
              overflowY: "auto", 
              whiteSpace: "wrap", 
              maxHeight:"320px"
            }}
          >
            <Card title="espresso" icon={<Coffee/>} num="100" style={{ margin: 0 }} />
            <Card title="espresso" icon={<Wheat/>} num="100" style={{ margin: 0 }} />
            <Card title="espresso" icon={<Utensils/>} num="100" style={{ margin: 0 }} />
            <Card title="espresso" icon={<Utensils/>} num="100" style={{ margin: 0 }} />
            <Card title="espresso" icon={<Utensils/>} num="100" style={{ margin: 0 }} />
            <Card title="espresso" icon={<Utensils/>} num="100" style={{ margin: 0 }} />
            <Card title="espresso" icon={<Utensils/>} num="100" style={{ margin: 0 }} />
            
          </div>
        </div>

        {/* =========================================
            RIGHT SIDE: Current Order Card (Lives in the 350px column)
            ========================================= */}
        <div className="card" style={{ 
          width: "100%", // Takes 100% of its locked 350px grid column
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
            overflowY: "auto", 
            margin: "10px 0"
          }}>
            {/* this is where current orders will be displayed */}
          </div>

          <div style={{ justifyContent: "space-between", display: "flex", width: "100%", fontWeight: "bold", fontSize: "18px" }}>
            <p>Total</p>
            <p>₱0.00</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Orders;