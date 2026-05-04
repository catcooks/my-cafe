import React from "react";
import type { StaffMember } from "../../hooks/Staff";
import { Mail, Phone, Settings } from "lucide-react";

interface StaffCardProps {
  member: StaffMember;
}

export const StaffCard: React.FC<StaffCardProps> = ({ member }) => {
  const isOnDuty = member.status === "On Duty";

  return (
    <div 
      className="card" 
      style={{ 
        width: "230px", 
        padding: "20px", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center",
        position: "relative",
        margin:"2px"
      }}
    >
      <div 
        style={{ 
          position: "absolute", 
          top: "12px", 
          right: "12px",
          display: "flex"
        }}
      >
        <button className="icon-btn" style={{ padding: "4px" }}><Settings size={14} /></button>
      </div>

      <div style={{ position: "relative" }}>
        <img 
          src={member.image} 
          alt={member.name} 
          style={{ 
            width: "70px", 
            height: "70px", 
            borderRadius: "50%", 
            background: "var(--code-bg)",
            border: `2px solid ${isOnDuty ? "#22c55e" : "var(--border)"}`
          }} 
        />
        <div 
          style={{ 
            position: "absolute", 
            bottom: "4px", 
            right: "4px", 
            width: "12px", 
            height: "12px", 
            borderRadius: "50%", 
            background: isOnDuty ? "#22c55e" : "#94a3b8",
            border: "2px solid var(--bg)"
          }} 
        />
      </div>
        <div style={{ textAlign: "center" }}>
          <h3 style={{ margin: "-5px 0px", fontSize: "18px", color: "var(--text-h)", lineHeight:"1.2" }}>{member.name}</h3>
          <p style={{ margin: "4px 0 0 0", fontSize: "14px", opacity: 0.6, fontWeight: 600 }}>{member.role}</p>
        </div>

        <div style={{ display: "flex", gap: "12px", width: "60%", justifyContent: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "end" }}>
            <span style={{ fontSize: "10px", textTransform: "uppercase", opacity: 0.5, fontWeight: 700, margin:"0px -5px",padding:"0px",lineHeight:"1.7", }}>Shift</span>
            <span style={{ fontSize: "12px", fontWeight: 600, margin:"0px -5px",padding:"0px",lineHeight:"1.7", }}>{member.shift}</span>
          </div>
          <div style={{ width: "1px", background: "var(--border)" }} />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
            <span style={{ fontSize: "10px", textTransform: "uppercase", opacity: 0.5, fontWeight: 700, margin:"0px -5px",padding:"0px",lineHeight:"1.7" }}>Status</span>
            <span style={{ fontSize: "12px", fontWeight: 600, margin:"0px -5px",padding:"0px",lineHeight:"1.7", color: isOnDuty ? "#22c55e" : "inherit" }}>{member.status}</span>
          </div>
        </div>

        <div style={{ display: "flex", gap: "8px", width: "60%" }}>
          <button style={{ flex: 1, padding: "3px 5px", fontSize: "12px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
            <Phone size={12} /> Call
          </button>
          <button style={{ flex: 1, padding: "3px 5px", fontSize: "12px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
            <Mail size={12} /> Email
          </button>
        </div>
      </div>
  );
};
