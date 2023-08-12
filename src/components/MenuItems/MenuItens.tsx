import DashboardIcon from "@mui/icons-material/Dashboard";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SettingsIcon from "@mui/icons-material/Settings";

export const menuItems = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    path: "/",
  },
  {
    text: "Vagas",
    icon: <DirectionsCarIcon />,
    path: "/vagas",
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsIcon />,
    path: "/admin",
  },
  {
    text: "Configurações",
    icon: <SettingsIcon />,
    path: "/configuracoes",
  },
];
