import { useState } from "react";
import { useMenu } from "../../hooks/Menu";
import MenuItem from "../../components/MenuItem";
import { Settings, CirclePlus } from "lucide-react";

interface ProductItem {
  name: string;
  price: number | string;
  discription: string;
  ingredients: Record<string, string> | null; 
}

const Products: React.FC = () => {
  const { menuData, loading, getIcon } = useMenu();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [productItems, setProductItems] = useState<ProductItem[]>([]);
  const categories = [ "All","Coffee","Pastry","Dessert","Food","Tea","Non-Coffee", ];
  
  // Updated to include both category and search query filtering
  const filteredItems = menuData?.filter((item: any) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }) || [];

  // Finished the handler to update the selected item state
const handleProductDisplay = (item: any) => {
  setProductItems([{
    name: item.name,
    price: item.price,
    discription: item.discription || item.description || "No description available.",
    ingredients: item.ingredients || null 
  }]);
};

  const selectedItem = productItems[0];

  return (
    <div>
      <h1 style={{ fontSize: "30px", marginBottom: "0px" }}>Products</h1>
      <div style={{ display: "flex" }}>
        <div
          style={{ width: "60%", }}
        >
          <input
            type="text"
            placeholder="Search Menu..."
            style={{ padding: "8px", width: "95%" }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <nav
            className="filter"
            style={{ display: "flex", overflowX: "auto", whiteSpace: "nowrap", gap: "16px", borderBottom: "1px solid var(--border)", paddingBottom: "10px", }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  backgroundColor: activeCategory === cat ? "var(--accent)" : "transparent", color: activeCategory === cat ? "white" : "var(--text)", border: activeCategory === cat ? "none" : "1px solid var(--border)", padding: "6px 16px", borderRadius: "20px", cursor: "pointer", transition: "all 0.2s", }}
              >
                {cat}
              </button>
            ))}
          </nav>
          <div
            style={{ minHeight: "250px", maxHeight: "70vh", overflowY: "auto", marginTop: "10px", }}
          >
            <div
              style={{ margin: "20px 0", display: "flex", flexWrap: "wrap", gap: "15px", width: "100%", overflowY: "auto", maxHeight: "50vh", }}
            >
              {loading ? (
                <p style={{ color: "var(--text)" }}>Loading menu...</p>
              ) : (
                filteredItems.map((item: any, index: number) => (
                  <div key={`${item.name}-${index}`} onClick={() => handleProductDisplay(item)} style={{ cursor: "pointer" }}>
                    <MenuItem
                      title={item.name}
                      icon={getIcon(item.category)}
                      num={item.price}
                      style={{ margin: 0 }}
                    />
                  </div>
                ))
              )}
              <div className="card" style={{justifyItems:"center", alignItems:"center"}}>
                <CirclePlus/>
              </div>
            </div>
          </div>
        </div>
          <div className="card" style={{ width: "35%", padding: "15px",margin:"auto", boxSizing: "border-box"}}>
          <div style={{ display:"flex", justifyContent:"space-between", width:"100%"}}>
            <h1 style={{ margin: "0px", fontSize: "32px", paddingBottom: "5px", border: "0px", }}>
              Dish details
            </h1>
            <button className="icon-btn"><Settings/></button>
          </div>
          <div style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", width: "100%", minHeight: "60vh", maxHeight: "60vh", overflowY: "auto", marginTop: "10px"}}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }}>
              <p style={{margin:"0px", fontSize:"13px", paddingBottom: "4px"}}>
                <strong>Name:</strong> <span style={{paddingLeft:"10px"}}>{selectedItem?.name || "Select a dish"}</span>
              </p>
              <p style={{margin:"0px", fontSize:"13px", paddingBottom: "4px"}}>
                <strong>Price:</strong><span style={{paddingLeft:"10px"}}>{selectedItem?.price ? `₱${selectedItem.price}` : ""}</span>
              </p>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", gap:"0px" }}>
                <strong style={{fontSize:"13px"}}>Discription:</strong> 
                {
                  selectedItem?.discription ? 
                    <p style={{margin:"-5px", fontSize:"12px", padding:"0px", paddingLeft:"10px", textAlign:"left", maxWidth: "40ch"}}>{selectedItem.discription}</p>
                    : ""
                }
              </div>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", gap:"0px" }}>
                <strong style={{fontSize:"13px"}}>Ingredients:</strong> 
                {
                  selectedItem?.ingredients ? 
                  Object.entries(selectedItem.ingredients).map(([key, value]) => (
                    <p style={{margin:"-5px", fontSize:"12px", padding:"0px", paddingLeft:"10px"}}>{`${key}: ${value}`}</p>
                  ))
                    : "None listed."
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;