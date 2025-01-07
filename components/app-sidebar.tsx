import { Table, Trophy } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import NavBrand from "./nav-brand";
import SidebarTrigger from "./sidebar-trigger";
import NavSearch from "./nav-search";

export function AppSidebar() {
  return (
    <Sidebar className="hidden md:block">
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-4">
          <SidebarTrigger />
          <NavBrand />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem key="Search">
                <SidebarMenuButton asChild className="h-full w-full flex">
                  <div className="flex">
                    <NavSearch />
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem key="Datasets">
                <SidebarMenuButton asChild>
                  <a href="/#">
                    <Table />
                    <span>Datasets</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem key="Showcases">
                <SidebarMenuButton asChild>
                  <a href="/#">
                    <Trophy />
                    <span>Showcases</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
