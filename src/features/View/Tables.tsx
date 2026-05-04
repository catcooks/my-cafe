import React, { useState, useEffect } from "react";
import { Users, Info } from "lucide-react";

interface TableData {
  id: number;
  number: string;
  capacity: number;
  status: 'Available' | 'Occupied' | 'Reserved';
  x: number;
  y: number;
}

const Tables: React.FC = () => {
  const [tables, setTables] = useState<TableData[]>([]);
  const [selectedTable, setSelectedTable] = useState<TableData | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}tables.json`)
      .then(res => res.json())
      .then(data => setTables(data));
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available': return '#22c55e';
      case 'Occupied': return 'var(--accent)';
      case 'Reserved': return '#eab308';
      default: return 'var(--border)';
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <h1 style={{ fontSize: "40px", padding: "15px", marginBottom: "0px" }}>Floor Plan</h1>
      
      {/* 
        MAIN CONTAINER 
        flexWrap: "wrap" allows the sidebar to drop down if the screen is too narrow 
      */}
      <div
        className="floor-plan-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "15px",
          width: "100%"
        }}
      >
        {/* 1. FLOOR MAP AREA */}
        <div
          className="card"
          style={{
            flex: "1 1 600px", // Takes up remaining space, drops down if container is < 600px
            height: "70vh",
            minHeight: "500px",
            position: "relative",
            background: "var(--code-bg)",
            overflow: "hidden",
            padding: 0
          }}
        >
          {/* Floor Grid Pattern */}
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(var(--border) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.5
          }} />

          {/* Tables */}
          {tables.map((table) => (
            <div
              key={table.id}
              onClick={() => setSelectedTable(table)}
              style={{
                position: "absolute",
                left: `${table.x}px`,
                top: `${table.y}px`,
                width: table.capacity > 4 ? "120px" : table.capacity > 2 ? "80px" : "60px",
                height: table.capacity > 4 ? "80px" : table.capacity > 2 ? "80px" : "60px",
                background: selectedTable?.id === table.id ? "white" : "var(--bg)",
                border: `3px solid ${getStatusColor(table.status)}`,
                borderRadius: table.number.startsWith('B') ? "8px" : "16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: selectedTable?.id === table.id ? "0 0 0 4px var(--accent-bg)" : "var(--shadow)",
                transition: "all 0.2s ease",
                zIndex: selectedTable?.id === table.id ? 10 : 1
              }}
            >
              <strong style={{ fontSize: "14px", color: "var(--text-h)" }}>{table.number}</strong>
              <div style={{ display: "flex", alignItems: "center", gap: "2px", fontSize: "10px", opacity: 0.6 }}>
                <Users size={10} /> {table.capacity}
              </div>
            </div>
          ))}

          {/* Entrance/Legend Label */}
          <div style={{ position: "absolute", bottom: "20px", left: "20px", background: "var(--bg)", padding: "8px 16px", borderRadius: "8px", border: "1px solid var(--border)", fontSize: "12px", fontWeight: 600 }}>
            ENTRANCE
          </div>
        </div>

        {/* 2. SIDEBAR CARDS AREA */}

          <div style={{display:"flex", width:"100%", justifyContent:"space-between", gap:"20px"}}> 
            {/* Table Info */}
          <div className="card" style={{ width: "50%", padding: "24px" }}>
            <h2 style={{ margin: "0 0 16px 0", fontSize: "20px" }}>Table Info</h2>
            {selectedTable ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ opacity: 0.6 }}>Table No.</span>
                  <strong>{selectedTable.number}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ opacity: 0.6 }}>Capacity</span>
                  <strong>{selectedTable.capacity} Pax</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ opacity: 0.6 }}>Status</span>
                  <strong style={{ color: getStatusColor(selectedTable.status) }}>{selectedTable.status}</strong>
                </div>
                <button style={{ width: "100%", marginTop: "8px", padding: "10px" }}>
                  {selectedTable.status === 'Available' ? 'Assign Table' : 'Manage Order'}
                </button>
              </div>
            ) : (
              <div style={{ textAlign: "center", opacity: 0.4, padding: "20px 0" }}>
                <Info size={32} style={{ marginBottom: "8px" }} />
                <p style={{ fontSize: "14px" }}>Select a table to view details</p>
              </div>
            )}
          </div>

          {/* Legend */}
          <div className="card" style={{ width: "50%", padding: "20px" }}>
            <h3 style={{ margin: "0 0 12px 0", fontSize: "16px" }}>Legend</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
              <LegendItem color="#22c55e" label="Available" />
              <LegendItem color="var(--accent)" label="Occupied" />
              <LegendItem color="#eab308" label="Reserved" />
            </div>
          </div>
          </div>
      </div>
    </div>
  );
};

const LegendItem: React.FC<{ color: string, label: string }> = ({ color, label }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}>
    <div style={{ width: "12px", height: "12px", borderRadius: "3px", background: color }} />
    <span>{label}</span>
  </div>
);

export default Tables;