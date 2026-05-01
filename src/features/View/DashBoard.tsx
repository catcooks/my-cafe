import React from "react";
import { TrendingUp, Clock, Table, Users } from "lucide-react";
import Reservation from "../../features/Controller/DashBoard";
import Card from "../../components/Card";
import { useReservations } from "../../hooks/Reservations";

const DashBoard: React.FC = () => {
  // 2. Use the hook to grab the data and status
  const { reservations, isLoading, error } = useReservations();

  return (
    <div style={{ width: "100%", flex: 1, boxSizing: "border-box"}}>
      <h1 style={{ fontSize: "40px", padding: "15px", marginBottom: "0px" }}>
        Dashboard
      </h1>
      <div style={{
          overflow: "auto"
        }}>
        <div
          className="card-container"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "10px",
            padding: "10px",
            margin: "10px auto",
            justifyContent: "center",
          }}
        >
          <Card title="Daily Revenue" icon={<TrendingUp size={24} />} num="2,350" style={{ height:"130px", width:"23%", margin:"" }}/>
          <Card title="Live Orders" icon={<Clock size={24} />} num="123" style={{ height:"130px", width:"23%", margin:"" }}/>
          <Card title="Occupied Tables" icon={<Table size={24} />} num="1/5" style={{ height:"130px", width:"23%", margin:"" }}/>
          <Card title="Staff on Duty" icon={<Users size={24} />} num="2" style={{ height:"130px", width:"23%", margin:"" }}/>
        </div>
        <div
          className="card-container"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <div className="card" style={{ width: "45%", maxHeight:"200px" }}>
            <h3 style={{paddingTop:"0", marginTop:"0"}}>Recent Orders</h3>
          </div>
          <div
            className="card"
            style={{
              width: "45%",
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              maxHeight: "250px"
            }}
          >
              <h3 style={{borderBottom: "1px solid var(--border)", paddingBottom: "10px", marginBottom: "16px", textAlign: "left", paddingTop:"0", marginTop:"0"}}>
                Upcoming Reservations
              </h3>
            <div style={{ overflow: "auto"}}>
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
