import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // Apply the theme class to the HTML tag whenever isDark changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button 
      onClick={() => setIsDark(!isDark)}
      style={{
        border: "0px",
        padding: "5px 10px 5px 10px",
        gap: "0px",
        margin: "0px",
        borderRadius: "100%"
      }}
    >
      {/* Toggle icons based on state */}
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;