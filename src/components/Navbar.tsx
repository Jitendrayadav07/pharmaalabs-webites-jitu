
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">Pharma<span className="text-pharma-accent">Labs</span></span>
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-700 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#solution" className="text-gray-700 hover:text-primary transition-colors">
              Solution
            </a>
            <a href="#stakeholders" className="text-gray-700 hover:text-primary transition-colors">
              Stakeholders
            </a>
            <a href="#demo" className="text-gray-700 hover:text-primary transition-colors">
              Demo
            </a>
            <Button className="bg-primary hover:bg-primary-dark">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a
              href="#features"
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a
              href="#solution"
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Solution
            </a>
            <a
              href="#stakeholders"
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Stakeholders
            </a>
            <a
              href="#demo"
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              Demo
            </a>
            <Button className="bg-primary hover:bg-primary-dark w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
