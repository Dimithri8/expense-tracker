import { Outlet } from "react-router-dom";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";

import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import FlagCircleOutlinedIcon from "@mui/icons-material/FlagCircleOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";

const navigation = [
  {
    segment: "overview",
    title: "Dashboard",
    icon: <DashboardCustomizeOutlinedIcon />,
  },
  {
    segment: "expenses",
    title: "Expenses",
    icon: <MonetizationOnOutlinedIcon />,
  },
  {
    segment: "goals",
    title: "Goals",
    icon: <FlagCircleOutlinedIcon />,
  },
  {
    segment: "budget",
    title: "Budget",
    icon: <CalculateOutlinedIcon />,
  },
  {
    segment: "analytics",
    title: "Analytics",
    icon: <AssessmentOutlinedIcon />,
  },
];

export default function App() {
  return (
    <ReactRouterAppProvider navigation={navigation}>
      <Outlet />
    </ReactRouterAppProvider>
  );
}
