import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="mx-auto w-screen px-2.5 md:px-10 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* SkilledIn Logo on the left */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="/logo.jpeg" // Replace with your logo path
                alt="SkilledIn Logo"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Links in the center */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="text-gray-700 hover:text-fuchsia-900 font-medium">Home</Link>
            <Link to="/schools" className="text-gray-700 hover:text-fuchsia-900 font-medium">Schools</Link>
            <Link to="/why-skilledin" className="text-gray-700 hover:text-fuchsia-900 font-medium">Why SkilledIn</Link>
            <Link to="/blog" className="text-gray-700 hover:text-fuchsia-900 font-medium">Blog</Link>
            <Link to="/faq" className="text-gray-700 hover:text-fuchsia-900 font-medium">FAQ</Link>
          </nav>

          {/* Login & Apply Now Button on the right */}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-fuchsia-900 font-medium">
              Login
            </Link>
            <Link
              to="/apply-now"
              className="bg-fuchsia-900 text-white px-4 py-2 rounded-md hover:bg-fuchsia-800 transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
