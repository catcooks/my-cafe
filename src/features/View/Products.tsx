import { useState } from "react";
import { useMenu, type MenuItemData } from "../../hooks/Menu";
import MenuItem from "../../components/MenuItem";
import { CirclePlus } from "lucide-react";
import { ProductDetails } from "../Controller/Products";

const Products: React.FC = () => {
  const { menuData, loading, getIcon } = useMenu();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<MenuItemData | null>(null);
  
  const categories = [ "All","Coffee","Pastry","Dessert","Food","Tea","Non-Coffee", ];
  
  const filteredItems = menuData?.filter((item: any) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }) || [];

  const handleProductDisplay = (item: any) => {
    setSelectedItem(item);
  };

  return (
    <div style={{width:"100%"}}>
      <h1 style={{ fontSize: "30px", marginBottom: "0px" }}>Products</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ width: "60%" }}>
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
              style={{ display: "flex", flexWrap: "wrap", width: "100%", overflowY: "auto", maxHeight: "50vh" }}
            >
              {loading ? (
                <p style={{ color: "var(--text)" }}>Loading menu...</p>
              ) : (
                filteredItems.map((item: any, index: number) => (
                  <div key={`${item.name}-${index}`} onClick={() => handleProductDisplay(item)} style={{ cursor: "pointer", margin:"3px" }}>
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
          <ProductDetails item={selectedItem} style={{ width: "35%", padding: "24px", margin: "auto", boxSizing: "border-box", minHeight: "60vh",maxHeight:"75vh",overflowY: "auto", display: "flex",}}/>
        </div>
      
    </div>
  );
};

export default Products;