import React, { useState } from "react";
import Logo from "../images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full fixed z-10 bg-black">
      <nav></nav>
    </div>
  );
};

export default Navbar;
