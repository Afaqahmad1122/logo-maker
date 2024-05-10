import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const Header = () => {
  return (
    <nav className="p-4 shadow-sm border flex items-center justify-between">
      <div className="flex items-center gap-2 font-bold text-3xl text-indigo-700">
        <img src="/logo.svg" alt="logo" />
        Afaq
      </div>
      <Button className="flex gap-2 items-center">
        <Download className="h-4 w-4" /> Download
      </Button>
    </nav>
  );
};

export default Header;
