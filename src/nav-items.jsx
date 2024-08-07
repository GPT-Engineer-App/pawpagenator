import { Home, Paw } from "lucide-react";
import Index from "./pages/Index.jsx";
import PawPage from "./pages/PawPage.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Paw Page",
    to: "/paw",
    icon: <Paw className="h-4 w-4" />,
    page: <PawPage />,
  },
];
