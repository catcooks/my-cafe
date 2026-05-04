import React from "react";
import { TrendingUp, Clock, Table, Users } from "lucide-react";
import Reservation from "../../features/Controller/DashBoard";
import Card from "../../components/Card";
import { useReservations } from "../../hooks/Reservations";

const DashBoard: React.FC = () => {
  // 2. Use the hook to grab the data and status
  const { reservations, isLoading, error } = useReservations();

  return (
    <div style={{ width: "100%", maxWidth: "1600px" }}>
      <h1 style={{ fontSize: "40px", padding: "15px", marginBottom: "0px" }}>
        Dashboard
      </h1>
      <div style={{
        overflow: "auto"
      }}>
        <div
          className="dashboard-grid"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            padding: "10px",
            width: "100%",
            boxSizing: "border-box"
          }}
        >
          <Card title="Daily Revenue" icon={<TrendingUp size={24} />} num="2,350" style={{ height: "130px", flex: "1 1 240px" }} />
          <Card title="Live Orders" icon={<Clock size={24} />} num="123" style={{ height: "130px", flex: "1 1 240px" }} />
          <Card title="Occupied Tables" icon={<Table size={24} />} num="1/5" style={{ height: "130px", flex: "1 1 240px" }} />
          <Card title="Staff on Duty" icon={<Users size={24} />} num="2" style={{ height: "130px", flex: "1 1 240px" }} />
        </div>
        <div
          className="dashboard-details"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            padding: "10px",
            width: "100%",
            boxSizing: "border-box"
          }}
        >
          <div className="card" style={{ flex: "1 1 400px", minHeight: "200px" }}>
            <h3 style={{ paddingTop: "0", marginTop: "0" }}>Recent Orders</h3>
          </div>
          <div
            className="card"
            style={{
              flex: "1 1 400px",
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              minHeight: "250px"
            }}
          >
            <h3 style={{ borderBottom: "1px solid var(--border)", paddingBottom: "10px", marginBottom: "16px", textAlign: "left", paddingTop: "0", marginTop: "0" }}>
              Upcoming Reservations
            </h3>
            <div style={{ overflow: "auto",width:"100%" }}>
              {isLoading && <p style={{ opacity: 0.7 }}>Loading reservations...</p>}
              {error && <p style={{ color: "red" }}>{error}</p>}
              {!isLoading &&
                !error &&
                reservations.map((res) => (
                  <Reservation
                    key={res.id}
                    name={res.name}
                    date={res.date}
                    time={res.time}
                    people={res.people}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
