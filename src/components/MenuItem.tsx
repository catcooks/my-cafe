import React, { useState } from 'react';

interface MenuItemProps {
  title: string;
  icon: React.ReactNode;
  num: string;
  style?: React.CSSProperties;
  onClick?: () => void; // Added an optional click handler
}

const MenuItem: React.FC<MenuItemProps> = ({ title, icon, num, style, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // Logical Styles
  const containerStyle: React.CSSProperties = {
    margin: "0 auto",
    width: "140px",
    display: "flex",
    flexDirection: "column",
    padding: "12px",
    borderRadius: "8px",
    cursor: "pointer",
    userSelect: "none", // Prevents text selection while clicking
    transition: "all 0.2s ease-in-out",
    backgroundColor: isHovered ? "var(--accent)" : "transparent",
    // Hover lifts it up, Pressed pushes it down
    transform: isPressed 
      ? "scale(0.95)" 
      : isHovered ? "translateY(-4px)" : "translateY(0)",
    ...style,
  };

  const iconContainerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "32px",
    height: "32px",
    borderRadius: "6px",
    flexShrink: "0",
    transition: "background-color 0.2s, color 0.2s",
    backgroundColor: isHovered ? "rgba(255, 255, 255, 0.2)" : "var(--code-bg)",
    color: isHovered ? "white" : "var(--accent)",
  };

  const textStyle: React.CSSProperties = {
    marginTop: "auto",
    fontSize: "12px",
    fontWeight: "500",
    lineHeight: "1.2",
    transition: "color 0.2s",
    color: isHovered ? "white" : "var(--text)",
  };

  const numberStyle: React.CSSProperties = {
    margin: "4px 0 0 0",
    fontSize: "18px",
    fontWeight: "bold",
    transition: "color 0.2s",
    color: isHovered ? "white" : "var(--text-h)",
  };

  return (
    <div
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onClick={onClick}
      style={containerStyle}
    >
      <div style={iconContainerStyle}>
        {icon}
      </div>

      <span style={textStyle}>
        {title}
      </span>

      <p style={numberStyle}>
        {num}
      </p>
    </div>
  );
};

export default MenuItem;