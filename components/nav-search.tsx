import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";

const NavSearch = () => {
  return (
    <div className="relative">
      <SearchIcon
        color="#A1A1AA"
        size={24}
        className="absolute left-1.5 top-1/2 transform -translate-y-1/2 pl-2"
      />
      <Input placeholder="Find a dataset" className="w-52 rounded-full pl-10" />
    </div>
  );
};

export default NavSearch;
