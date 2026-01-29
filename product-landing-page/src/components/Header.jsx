import { productData } from "../data";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <div>
          <h1 className="text-xl font-bold">
            <a href="#">SoundPro</a>
          </h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900">
            Features
          </a>
          <a href="#benefits" className="text-gray-600 hover:text-gray-900">
            Benefits
          </a>
          <a href="#faq" className="text-gray-600 hover:text-gray-900">
            FAQ
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
        </nav>
        <div className="hidden md:block">
          
            <a href="#buy"
            className="bg-black text-white font-medium px-6 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Buy Now - ${productData.price}
          </a>
        </div>

        {/* hamburger menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* mobile menu dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-4 border-t" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col space-y-4 px-4 text-lg">
          
            <a href="#features"
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 hover:text-gray-900 py-3 active:bg-gray-100 pl-2"
          >
            Features
          </a>
          
            <a href="#benefits"
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 hover:text-gray-900 py-3 active:bg-gray-100 pl-2"
          >
            Benefits
          </a>
          
            <a href="#faq"
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 hover:text-gray-900 py-3 active:bg-gray-100 pl-2"
          >
            FAQ
          </a>
          
            <a href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 hover:text-gray-900 py-3 active:bg-gray-100 pl-2"
          >
            Contact
          </a>
          
            {/* <a href="#buy"
            onClick={() => setMenuOpen(false)}
            className="bg-black text-white px-6 py-3 rounded-full text-center hover:bg-gray-800 transition"
          >
            Buy Now - ${productData.price}
          </a> */}
        </nav>
      </div>
    </header>
  );
}

export default Header;