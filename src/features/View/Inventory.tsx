import { useState } from "react";
import { Settings, Trash2 as Trash } from "lucide-react";
import inventory from "../../../public/inventory.json";

const Inventory: React.FC = () => {
  const [items] = useState(inventory);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1 style={{ fontSize: "30px" }}>Inventory</h1>
      <div
        className="card"
        style={{
          width: "100%",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <div style={{width:"98%"}}>
          <input
            type="text"
            placeholder="Search inventory..."
            style={{ padding: "8px", }}
            /* 3. Bind the input value to state and update on change */
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div style={{ maxHeight: "300px", overflowY: "auto", border: "1px solid #d4d4d4",width:"100%" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#f8f9fa",
              }}
            >
              <th style={{ padding: "3px", position:"sticky", zIndex:"1",top:"0",backgroundColor:"var(--code-bg)", boxShadow:"inset 0 -2px #aaaaaa" }}><p style={{ fontSize:"15px", marginBottom:"0px", display:"flex", justifySelf:"center"}}>
                Item Name </p> </th>
              <th style={{ padding: "3px", position:"sticky", zIndex:"1",top:"0",backgroundColor:"var(--code-bg)", boxShadow:"inset 0 -2px #aaaaaa" }}><p style={{ fontSize:"15px", marginBottom:"0px", display:"flex", justifySelf:"center"}}>
                Unit </p> </th>
              <th style={{ padding: "3px", position:"sticky", zIndex:"1",top:"0",backgroundColor:"var(--code-bg)", boxShadow:"inset 0 -2px #aaaaaa" }}><p style={{ fontSize:"15px", marginBottom:"0px", display:"flex", justifySelf:"center"}}>
                Price </p> </th>
              <th style={{ padding: "3px", position:"sticky", zIndex:"1",top:"0",backgroundColor:"var(--code-bg)", boxShadow:"inset 0 -2px #aaaaaa" }}><p style={{ fontSize:"15px", marginBottom:"0px", display:"flex", justifySelf:"center"}}>
                Stock </p> </th>
              <th style={{ padding: "3px", position:"sticky", zIndex:"1",top:"0",backgroundColor:"var(--code-bg)", boxShadow:"inset 0 -2px #aaaaaa" }}><p style={{ fontSize:"15px", marginBottom:"0px", display:"flex", justifySelf:"center"}}>
                Status </p> </th>
              <th style={{ padding: "3px", position:"sticky", zIndex:"1",top:"0",backgroundColor:"var(--code-bg)", boxShadow:"inset 0 -2px #aaaaaa" }}><p style={{ fontSize:"15px", marginBottom:"0px", display:"flex", justifySelf:"center"}}>
                Actions </p> </th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr style={{ borderBottom: "1px solid var(---code-bg)" }}>
                <td style={{ padding: "3px", border:"1px solid #d4d4d4" }}>
                  <strong><p style={{padding:"5px",fontSize:"15px", margin:"5px auto"}}>{item.name}</p></strong>
                </td>
                <td style={{ padding: "3px", border:"1px solid #d4d4d4" }}><p style={{padding:"5px",fontSize:"15px", margin:"5px auto"}}>{item.unit}</p></td>
                <td style={{ padding: "3px", border:"1px solid #d4d4d4" }}><p style={{padding:"5px",fontSize:"15px", margin:"5px auto"}}>{item.price}</p></td>
                <td style={{ padding: "3px", border:"1px solid #d4d4d4" }}><p style={{padding:"5px",fontSize:"15px", margin:"5px auto"}}>{item.stock}</p></td>
                <td style={{ padding: "3px", border:"1px solid #d4d4d4" }}>
                  <span style={{ color: item.stock === 0 ? "red" : item.stock < 10 ? "orange" : "green", fontSize:"15px", margin:"5px auto", padding:"5px"}}>
                    {item.status}
                  </span>
                </td>
                <td style={{ padding: "5px",margin:"0px", border:"1px solid #d4d4d4"}}>
                  <div style={{ display:"flex", justifyContent:"center",alignContent:"center"}}>
                  <button style={{margin: "5px", padding:"10px 10px 5px 10px", borderRadius:"15px" }}><Settings color="grey" size="15px"/></button>
                  <button style={{margin: "5px", padding:"10px 10px 5px 10px", borderRadius:"15px" }}><Trash color="hsl(0, 100%, 67%)" size="15px"/></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default Inventory;