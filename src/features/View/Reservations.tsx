import React from "react";
import { useReservations } from "../../hooks/Reservations";
import { ReservationItem } from "../Controller/Reservations";
import { Calendar as CalendarIcon, Plus } from "lucide-react";

const Reservations: React.FC = () => {
  const { reservations, isLoading, error } = useReservations();

  return (
    <div style={{ width: "100%" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px" }}>
        <h1 style={{ fontSize: "40px", margin: 0, border: "none", padding: 0 }}>Reservations</h1>
        <button style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Plus size={20} /> New Reservation
        </button>
      </div>

      {/* Main Content Area - Stacked vertically */}
      <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "15px", width: "100%" }}>
        
        {/* Top Row: Quick Stats & Notes aligned horizontally */}
        <div style={{ display: "flex", flexDirection: "row", gap: "24px", width: "100%" }}>
          
          {/* Quick Stats Card */}
          <div className="card" style={{ flex: 1, padding: "24px" }}>
            <h3 style={{ margin: "0 0 16px 0", fontSize: "18px" }}>Quick Stats</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
              <div style={{ display: "flex", justifyContent: "space-between", opacity: 0.8 }}>
                <span>Today</span>
                <strong>{reservations.filter(r => r.date === 'Today').length}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", opacity: 0.8 }}>
                <span>Tomorrow</span>
                <strong>{reservations.filter(r => r.date === 'Tomorrow').length}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", opacity: 0.8, paddingTop: "12px", borderTop: "1px solid var(--border)" }}>
                <span>Total People</span>
                <strong>{reservations.reduce((acc, r) => acc + parseInt(r.people), 0)} Pax</strong>
              </div>
            </div>
          </div>

          {/* Reservations Note Card */}
          <div className="card" style={{ flex: 1, padding: "24px", background: "var(--accent)", color: "white" }}>
            <h3 style={{ margin: "0 0 12px 0", fontSize: "18px", color: "white" }}>Reservations Note</h3>
            <p style={{ fontSize: "14px", opacity: 0.9, lineHeight: "1.6" }}>
              Remember to confirm reservations via phone 2 hours before the scheduled time.
            </p>
          </div>

        </div>

        {/* Bottom Section: Upcoming (Full Width) */}
        <div className="card" style={{ width: "100%", padding: "24px", maxHeight: "100%", overflowY: "auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", width: "100%" }}>
            <h2 style={{ margin: 0 }}>Upcoming</h2>
            <div style={{ display: "flex", gap: "8px" }}>
              <button className="icon-btn" aria-label="Calendar">
                <CalendarIcon size={20} />
              </button>
            </div>
          </div>
          
          <div style={{ width: "100%" }}>
            {isLoading && <p style={{ opacity: 0.5 }}>Loading reservations...</p>}
            {error && <p style={{ color: "#ef4444" }}>{error}</p>}
            {!isLoading && !error && reservations.map((res) => (
              <ReservationItem key={res.id} reservation={res} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Reservations;