import React, { useContext } from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import { Context } from '../../main'; // Adjust the path as needed

const Footer = () => {
  const { isAuthorized } = useContext(Context); // Access the context

  // Do not render the footer if not authorized
  if (!isAuthorized) {
    return null;
  }

  return (
    <footer className="bg-[#001f3f] text-gray-300 py-2">
      <div className="max-w-[1240px] mx-auto px-4 grid lg:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <img src="/logo.png" alt="Logo" />
          <p className="py-4">
            Our mission is to create educational resources that inspire curiosity and enhance ocean literacy using NASA PACE data.
          </p>
          {/* Social Media Icons */}
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={30} className="hover:text-[#00df9a] transition duration-300" />
            <FaInstagram size={30} className="hover:text-[#00df9a] transition duration-300" />
            <FaTwitterSquare size={30} className="hover:text-[#00df9a] transition duration-300" />
            <FaGithubSquare size={30} className="hover:text-[#00df9a] transition duration-300" />
            <FaDribbbleSquare size={30} className="hover:text-[#00df9a] transition duration-300" />
          </div>
        </div>

        {/* Links Section */}
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-gray-400">Our Resources</h6>
            <ul>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Lesson Plans</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Interactive Activities</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Videos</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Workshops</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Get Support</h6>
            <ul>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Contact Us</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">FAQs</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Help Center</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">User Guides</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">About Us</h6>
            <ul>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Our Story</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Team</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Careers</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Partners</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Legal</h6>
            <ul>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Privacy Policy</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Terms of Use</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
