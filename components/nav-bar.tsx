import { ModeToggle } from "./mode-toggle";
import NavBrand from "./nav-brand";
import NavLinks from "./nav-links";
import NavSearch from "./nav-search";
import SidebarTrigger from "./sidebar-trigger";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-4 flex-grow">
      <div className="flex items-center space-x-4">
        <SidebarTrigger />
        <NavBrand />
      </div>
      <NavLinks />
      <div className="flex items-center space-x-2 md:space-x-4">
        <div className="hidden md:block">
          <NavSearch />
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default NavBar;
