import React from "react";
import { useStaff } from "../../hooks/Staff";
import { StaffCard } from "../Controller/Staff";
import { UserPlus, Search } from "lucide-react";

const Staff: React.FC = () => {
  const { staff, loading } = useStaff();

  return (
    <div style={{ width: "100%", flex: 1, boxSizing: "border-box" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px" }}>
        <h1 style={{ fontSize: "40px", margin: 0, border: "none", padding: 0 }}>Staff Management</h1>
        <button style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <UserPlus size={20} /> Add Member
        </button>
      </div>

      <div style={{ padding: "0 15px 20px 15px" }}>
        <div style={{ position: "relative", width: "400px", marginBottom: "32px" }}>
          <input 
            type="text" 
            placeholder="Search staff members..." 
            style={{ padding: "12px 24px 12px 48px", margin: 0 }}
          />
          <Search size={20} style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", opacity: 0.4 }} />
        </div>

        {loading ? (
          <p style={{ opacity: 0.5 }}>Loading staff...</p>
        ) : (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {staff.map((member) => (
              <StaffCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Staff;
