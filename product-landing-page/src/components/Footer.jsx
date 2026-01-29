import { contactInfo } from "../data";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div>
            <span className="text-xl font-bold">SoundPro</span>
            <p className="mt-4 text-gray-400 text-sm max-w-70">
              Premium audio equipment for those who demand excellence.
            </p>
          </div>

          {/* Column 2: Product links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="#features"
                className="text-gray-400 text-sm hover:text-white"
              >
                Features
              </a>
              <a
                href="#benefits"
                className="text-gray-400 text-sm hover:text-white"
              >
                Benefits
              </a>
              <a href="#faq" className="text-gray-400 text-sm hover:text-white">
                FAQ
              </a>
              <a href="#buy" className="text-gray-400 text-sm hover:text-white">
                Buy Now
              </a>
            </div>
          </div>

          {/* Column 3: Support links */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="#contact"
                className="text-gray-400 text-sm hover:text-white"
              >
                Contact Us
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-white">
                Shipping
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-white">
                Returns
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-white">
                Warranty
              </a>
            </div>
          </div>

          {/* Column 4: Contact info */}
          <div className="space-y-2">
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 text-sm">{contactInfo.email}</p>
            <p className="text-gray-400 text-sm">{contactInfo.phone}</p>
            <p className="text-gray-400 text-sm">{contactInfo.hours}</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-10 border-t border-gray-800 text-center text-gray-400 text-sm">
          © {currentYear} SoundPro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
