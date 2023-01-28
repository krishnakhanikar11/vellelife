import React from "react";
import logo from "../assets/logo.png";
import WhatsApp from "../assets/WhatsApp.png";

const Navbar = () => {
  return (
    <nav className=" py-3 ">
      <div className="flex flex-wrap items-center justify-between ">
        <a href="#" className="flex items-center">
          <img src={logo} className="h-8 md:h-11 mr-3 sm:h-9" alt=" Logo" />
        </a>

        <a href="https://wa.me/message/5YDDLL4SIQZYO1" className="flex items-center">
          <img src={WhatsApp} className="h-8 md:h-11 mr-3 sm:h-9" alt=" Logo" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
