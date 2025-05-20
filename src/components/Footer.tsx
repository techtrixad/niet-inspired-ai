
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">About NIET</h3>
            <p className="text-gray-300 mb-4">
              An Autonomous Institute dedicated to providing quality education and creating future-ready professionals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                FB
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                TW
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Instagram</span>
                IG
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                LI
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Programs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Admissions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Campus Life</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Placements</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Research</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>19, Knowledge Park-II, Institutional Area, Greater Noida (UP)</li>
              <li>Phone: +91-8010-500-700</li>
              <li>Email: info@niet.co.in</li>
              <li>Admission: admission@niet.co.in</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-3 py-2 rounded-l outline-none flex-1"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-hover px-4 py-2 rounded-r"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} NIET - Noida Institute of Engineering & Technology. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
