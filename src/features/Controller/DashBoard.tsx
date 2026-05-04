import React from "react";
import { Calendar, Clock, Users } from "lucide-react";

interface ReservationProps {
  name: string;
  date: string;
  time: string; // Changed to string for easier formatting
  people: string;
}

const Reservation: React.FC<ReservationProps> = ({
  name,
  date,
  time,
  people,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 16px",
        marginBottom: "10px", // Spacing between list items
        border: "1px solid var(--border)",
        borderRadius: "8px",
        background: "var(--bg)",
        transition: "all 0.2s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "4px",
        }}
      >
        <span
          style={{ fontWeight: 600, color: "var(--text-h)", fontSize: "16px" }}
        >
          {name}
        </span>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "12px",
            opacity: 0.8,
          }}
        >
          <Calendar size={14} /> {date}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "4px",
        }}
      >
        <span
          style={{
            fontWeight: 600,
            color: "var(--accent)",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <Clock size={14} /> {time}
        </span>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "12px",
            opacity: 0.8,
          }}
        >
          <Users size={14} /> {people}
        </span>
      </div>
    </div>
  );
};

export default Reservation;
