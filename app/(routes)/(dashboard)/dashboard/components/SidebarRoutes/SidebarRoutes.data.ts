import { Calendar, Car, Heart, Package, Settings } from "lucide-react";

export const dataGeneralSidebar = [
  {
    icon: Car,
    label: "Cars",
    href: "/dashboard",
  },
  {
    icon: Calendar,
    label: "Cars Reserves",
    href: "/reserves",
  },
  {
    icon: Heart,
    label: "Loved Cars",
    href: "/loved-cars",
  },
];

export const dataAdminSidebar = [
  {
    icon: Package,
    label: "Manage your cars",
    href: "/dashboard/admin/cars-manager",
  },
  {
    icon: Calendar,
    label: "All reserves",
    href: "/all-reserves",
  },
];
