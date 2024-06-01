import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-green-800 text-white py-4 font-sans sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center"> {/* Left side */}
          <h1 className="text-3xl font-bold text-green-100 mr-4">Islamic Information Portal</h1>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            <Bars3Icon className="h-8 w-8 text-white ml-9" />
          </button>
        </div>
        
        {/* Right side */}
        <nav className="flex justify-end md:justify-start mt-4 md:mt-0">
          <ul className="hidden md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <li><a href="/" className="md:hover:bg-green-400 md:hover:shadow-lg md:hover:text-white md:hover:rounded-md md:hover:px-3 md:hover:py-2">Home</a></li>
            <li><a href="#prayers" className="md:hover:bg-green-400 md:hover:shadow-lg md:hover:text-white md:hover:rounded-md md:hover:px-3 md:hover:py-2">Prayers</a></li>
            <li><a href="#fasting" className="md:hover:bg-green-400 md:hover:shadow-lg md:hover:text-white md:hover:rounded-md md:hover:px-3 md:hover:py-2">Fasting</a></li>
            <li><a href="#duties" className="md:hover:bg-green-400 md:hover:shadow-lg md:hover:text-white md:hover:rounded-md md:hover:px-3 md:hover:py-2">Important Duties</a></li>
            <li><a href="#additional" className="md:hover:bg-green-400 md:hover:shadow-lg md:hover:text-white md:hover:rounded-md md:hover:px-3 md:hover:py-2">Islamic Prophets</a></li>
            <li><a href="#contact" className="md:hover:bg-green-400 md:hover:shadow-lg md:hover:text-white md:hover:rounded-md md:hover:px-3 md:hover:py-2">Contact</a></li>
          </ul>
        </nav>
        
        {/* Responsive Menu */}
        {isMenuOpen && (
          <nav className={`fixed top-0 right-0 bg-green-400 shadow-lg z-20 transition-transform transform duration-2000 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
            <ul onClick={() => setIsMenuOpen(false)} className="flex flex-col text-white space-y-4 p-6">
              <li className="cursor-pointer py-2 border-b border-white"><a href="/">Home</a></li>
              <li className="cursor-pointer py-2 border-b border-white"><a href="#prayers">Prayer</a></li>
              <li className="cursor-pointer py-2 border-b border-white"><a href="#fasting">Fasting</a></li>
              <li className="cursor-pointer py-2 border-b border-white"><a href="#duties">Important Duties</a></li>
              <li className="cursor-pointer py-2 border-b border-white"><a href="#additional">Islamic Prophets</a></li>
              <li className="cursor-pointer py-2 border-b border-white"><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
