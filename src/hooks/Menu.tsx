import React, { useState, useEffect } from 'react';
import { 
  Coffee, 
  Leaf, 
  Milk, 
  Croissant, 
  Dessert, 
  Utensils 
} from 'lucide-react';

export interface MenuItemData {
  name: string;
  category: string;
  price: string;
  discription: string;
  ingredients: Record<string, string>;
}

// Map your JSON categories to Lucide components
const categoryIconMap: Record<string, React.ReactNode> = {
  "Coffee": <Coffee size={20} />,
  "Tea": <Leaf size={20} />,
  "Non-Coffee": <Milk size={20} />,
  "Pastry": <Croissant size={20} />,
  "Dessert": <Dessert size={20} />,
  "Food": <Utensils size={20} />
};

export const useMenu = () => {
  const [menuData, setMenuData] = useState<MenuItemData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Assuming your json is in the public folder
    fetch('/menu.json')
      .then((res) => res.json())
      .then((data) => {
        setMenuData(data);
        setLoading(false);
      });
  }, []);

  // Helper function to get the icon based on category string
  const getIcon = (category: string) => {
    return categoryIconMap[category] || <Utensils size={20} />;
  };

  return { menuData, loading, getIcon };
};