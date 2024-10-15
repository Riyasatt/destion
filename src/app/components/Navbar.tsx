'use client'

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50  transition-all duration-500 ${
        isScrolled ? "bg-black px-4 py-4" : "bg-transparent px-4 py-6"
      }`}
    >
      <div className=" max-w-[1300px] mx-auto  flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">DESTION</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-[#E43C5C] transition-colors duration-500"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>


        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white h-[calc(100vh-90px)]">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-black hover:text-[#E43C5C] transition-colors block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
