import React from 'react';
import { ChevronRight } from 'lucide-react';
import './BarItem.css';

// 1. Notice we use isActive and onClick here
interface ItemProps {
  title: string;
  icon: React.ReactNode;
  isActive: boolean; 
  onClick: () => void; 
}

const BarItem: React.FC<ItemProps> = ({ title, icon, isActive, onClick }) => {
  // 2. NO local useState here! The parent SideBar is the boss now.

  return (
    <button
      onClick={onClick} 
      className={`bar-item ${isActive ? 'active' : ''}`}
      style={{
        borderRadius: "8px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "8px",
        gap: "8px",
      }}
    >
      <span style={{ display: "flex" }}>
        {icon}
      </span>

      <h3 style={{ padding: 0, margin: 0, display: "flex" }}>
        {title}
      </h3>

      {isActive && (
        <span style={{ display: "flex", marginLeft: "auto" }}>
          <ChevronRight size={18} />
        </span>
      )}
    </button>
  );
};

export default BarItem;