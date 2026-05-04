import BarItem from "../components/BarItem";
import ThemeToggle from "../components/ThemeToggle";
import {
  LayoutDashboard,
  UtensilsCrossed,
  Users,
  ClipboardList,
  Package,
  Settings,
  Table,
} from 'lucide-react';
// 1. Define an interface for the component props
interface SideBarProps {
  title: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({ title, activeTab, setActiveTab }) => {
  // 2. Local useState is removed. We use the props instead.
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1 style={{ marginBottom: '0px' }}>{title}</h1>
        <ThemeToggle />
      </div>
      <BarItem title="Dashboard" icon={<LayoutDashboard />}
        isActive={activeTab === "Dashboard"}
        onClick={() => setActiveTab("Dashboard")}
      />
      <BarItem title="Orders" icon={<ClipboardList />}
        isActive={activeTab === "Orders"}
        onClick={() => setActiveTab("Orders")}
      />
      <BarItem title="Products" icon={<UtensilsCrossed />}
        isActive={activeTab === "Products"}
        onClick={() => setActiveTab("Products")}
      />
      <BarItem title="Staff" icon={<Users />}
        isActive={activeTab === "Staff"}
        onClick={() => setActiveTab("Staff")}
      />
      <BarItem title="Inventory" icon={<Package />}
        isActive={activeTab === "Inventory"}
        onClick={() => setActiveTab("Inventory")}
      />
      <BarItem title="Reservations" icon={<Settings />}
        isActive={activeTab === "Reservations"}
        onClick={() => setActiveTab("Reservations")}
      />
      <BarItem title="Tables" icon={<Table />}
        isActive={activeTab === "Tables"}
        onClick={() => setActiveTab("Tables")}
      />
    </div>
  );
};

export default SideBar;
