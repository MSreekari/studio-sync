import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-[#120723] text-white top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 py-4 flex justify-between items-center">
        <h1 className={`font-florisha text-3xl`}>StudioSync</h1>
      <div className="hidden md:flex gap-20 font-medium text-[1.15rem]">
        <a href="#features" className="hover:text-[#7A30D4] transition">Features</a>
        <a href="#pricing" className="hover:text-[#7A30D4] transition">Pricing</a>
        <Link to="" className="hover:text-[#7A30D4] transition">About</Link>
      </div>
      <div className="hidden md:flex items-center gap-9">
        <a href="/login" className="hover:text-[#7A30D4] transition text-[1.15rem]">Login</a>
        <button className="border border-white text-white text-[1.15rem] px-7 py-2 rounded-full hover:bg-[#7A30D4] hover:border-transparent transition duration-200 ease-in-out cursor-pointer">Sign up for free</button>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={() => {
            setMenuOpen(!menuOpen)
        }}>
            {menuOpen ? <FaTimes size={24}/> : <FaBars size={24} />}
        </button>
      </div>
      </div>
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-[#120723] text-white font-medium">
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
        <a href="#">Login</a>
        <button className="border border-white px-6 py-2 rounded-full">Sign up for free</button>
      </div>
    )}
    </nav>
  );
};

export default Navbar;
