"use client";

import { Menu } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";

const SidebarTrigger = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <Menu
      onClick={() => toggleSidebar()}
      className="block md:hidden cursor-pointer"
    />
  );
};

export default SidebarTrigger;
