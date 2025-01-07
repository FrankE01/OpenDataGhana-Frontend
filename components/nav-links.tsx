import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const NavLinks = () => {
  return (
    <NavigationMenu className="space-x-4 hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavLink>Datasets</NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavLink>Showcases</NavLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavLinks;

const NavLink = ({ children }: { children: string }) => {
  return <div className="px-4">{children}</div>;
};
