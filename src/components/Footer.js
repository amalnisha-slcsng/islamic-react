import React from 'react';

const Footer = () => {
  return (
    <footer id='contact' className="bg-green-800 text-green-200 py-8 mt-8 font-sans">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Navigation Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 ">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className='ml-3'>
              <li className="mb-2"><a href="#home" className="hover:underline">Home</a></li>
              <li className="mb-2"><a href="#about" className="hover:underline">About</a></li>
              <li className="mb-2"><a href="#prayers" className="hover:underline">Prayers</a></li>
              <li className="mb-2"><a href="#fasting" className="hover:underline">Fasting</a></li>
              <li className="mb-2"><a href="#duties" className="hover:underline">Duties</a></li>
              <li className="mb-2"><a href="#prophets" className="hover:underline">Prophets</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="mb-2">123 Islamic Center, Main St, City, Country</p>
            <p className="mb-2">Email: info@islamiccenter.com</p>
            <p className="mb-2">Phone: +123 456 7890</p>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-green-500">
          &copy; {new Date().getFullYear()} Islamic Center. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
