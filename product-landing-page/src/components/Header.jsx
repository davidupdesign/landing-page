import { productData } from "../data";

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <div>
          <h1 className="text-xl font-bold">SoundPro</h1>
        </div>
        <nav className="flex space-x-8">
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
        <div>
          <a
            href="#buy"
            className="bg-black text-white font-medium px-6 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Buy Now - ${productData.price}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
