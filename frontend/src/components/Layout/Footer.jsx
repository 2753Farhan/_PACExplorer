import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#001f3f] text-gray-300 py-16">
      <div className="max-w-[1240px] mx-auto px-4 grid lg:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <img src="/logo.png" alt="Logo" />
          <p className="py-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id odit ullam
            iste repellat consequatur libero reiciendis, blanditiis accusantium.
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
            <h6 className="font-medium text-gray-400">Solutions</h6>
            <ul>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Analytics</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Marketing</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Commerce</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Insights</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Support</h6>
            <ul>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Pricing</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Documentation</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Guides</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">API Status</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Company</h6>
            <ul>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">About</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Blog</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Jobs</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Press</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Legal</h6>
            <ul>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Claim</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Policy</li>
              <li className="py-2 text-sm hover:text-[#00df9a] transition">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
