import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const NavLinks = () => {
  return (
    <NavigationMenu className="space-x-4 hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavLink href="/datasets">Datasets</NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavLink href="/categories">Categories</NavLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavLinks;

const NavLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <Link href={href} className="px-4">
      {children}
    </Link>
  );
};
