
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">NIET</h1>
              <p className="text-xs">Greater Noida</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-primary font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium">Programs</a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium">Admissions</a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium">Campus Life</a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium">Contact</a>
          </nav>
          
          {/* Apply Button */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary-hover text-white">
              Apply Online 2025
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu />
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-gray-700 hover:text-primary font-medium px-4 py-2">Home</a>
              <a href="#" className="text-gray-700 hover:text-primary font-medium px-4 py-2">About</a>
              <a href="#" className="text-gray-700 hover:text-primary font-medium px-4 py-2">Programs</a>
              <a href="#" className="text-gray-700 hover:text-primary font-medium px-4 py-2">Admissions</a>
              <a href="#" className="text-gray-700 hover:text-primary font-medium px-4 py-2">Campus Life</a>
              <a href="#" className="text-gray-700 hover:text-primary font-medium px-4 py-2">Contact</a>
              <div className="px-4 pt-2">
                <Button className="bg-primary hover:bg-primary-hover text-white w-full">
                  Apply Online 2025
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
