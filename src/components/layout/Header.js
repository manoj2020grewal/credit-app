import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <div>
            <Link to="/" className="text-white text-xl font-bold">Your Logo</Link>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className={`text-white hover:text-gray-300 ${location.pathname === '/' ? 'font-bold' : ''}`}>Home</Link>
              </li>
              <li>
                <Link to="/about" className={`text-white hover:text-gray-300 ${location.pathname === '/about' ? 'font-bold' : ''}`}>About</Link>
              </li>
              <li>
                <Link to="/contact" className={`text-white hover:text-gray-300 ${location.pathname === '/contact' ? 'font-bold' : ''}`}>Contact</Link>
              </li>
              <li>
                <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
              </li>
              <li>
                <Link to="/signup" className="text-white hover:text-gray-300">Signup</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
