import React from "react";
import { Calendar, Clock, Users, Settings } from "lucide-react";
import type { ReservationData } from "../../hooks/Reservations";

interface ReservationItemProps {
  reservation: ReservationData;
}

export const ReservationItem: React.FC<ReservationItemProps> = ({ reservation }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
        marginBottom: "12px",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        background: "var(--bg)",
        transition: "all 0.2s ease",
        cursor: "pointer"
      }}
      className="reservation-item"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <span style={{ fontWeight: 600, color: "var(--text-h)", fontSize: "16px" }}>{reservation.name}</span>
        <div style={{ display: "flex", gap: "12px", fontSize: "12px", opacity: 0.6 }}>
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Calendar size={14} /> {reservation.date}</span>
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Clock size={14} /> {reservation.time}</span>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: 600, color: "var(--accent)", background: "var(--accent-bg)", padding: "4px 10px", borderRadius: "100px" }}>
          <Users size={14} /> {reservation.people}
        </span>
        <button className="icon-btn" style={{ padding: "6px" }}><Settings size={16} /></button>
      </div>
    </div>
  );
};
