import React from 'react';

interface CardProps {
  title: string;
  icon: React.ReactNode;
  num: string;
  // 1. Add an optional style prop
  style?: React.CSSProperties; 
}

const Card: React.FC<CardProps> = ({ title, icon, num, style }) => {
  return (
    <div 
      className="card" 
      style={{
        margin: "0 auto", 
        width: "140px",
        ...style 
      }}
    >
      <code style={{display: "flex", width: "20px", height: "20px", color: "var(--accent)", flexShrink: "0"}}>
        {icon}
      </code>
      <span style={{marginTop: 'auto', fontSize: '12px', fontWeight: '500', color: 'var(--text)', lineHeight: '1.2'}}>
        {title}
      </span>
      <p style={{ margin: '4px 0 0 0',fontSize: '16px',fontWeight: 'bold', color: 'var(--text-h)'}}>
        {num}
      </p>
    </div>
  );
}

export default Card;