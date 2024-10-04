import React, { useContext, useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Context } from '../../main';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        'http://localhost:4000/api/v1/user/logout',
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigateTo('/login');
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthorized(true);
    }
  };

  // Control body scroll based on nav state
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [nav]);

  if (!isAuthorized) {
    return null; // Do not render Navbar if not authenticated
  }

  return (
    <div className="flex justify-between items-center h-24 w-full px-4 text-white bg-[#001f3f]">
      <span className="text-3xl font-bold text-[#0cda50]">REACT.</span>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <Link to="/" className="p-4 hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link to="/company" className="p-4 hover:text-gray-300">Company</Link>
        </li>
        <li>
          <Link to="/about" className="p-4 hover:text-gray-300">About</Link>
        </li>
        <li>
          <Link to="/contact" className="p-4 hover:text-gray-300">Contact</Link>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition duration-300"
          >
            Logout
          </button>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden" onClick={() => setNav(!nav)}>
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#001f3f] pt-4 ease-in-out duration-500'
            : 'fixed left-[-100%]'
        }
      >
        <span className="w-full text-3xl font-bold text-[#0cda50] m-5">REACT.</span>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">
            <Link to="/" onClick={() => setNav(false)}>Home</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/company" onClick={() => setNav(false)}>Company</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/about" onClick={() => setNav(false)}>About</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/contact" onClick={() => setNav(false)}>Contact</Link>
          </li>
          <li className="p-4">
            <button
              onClick={() => {
                setNav(false);
                handleLogout();
              }}
              className="block w-full text-left bg-red-600 hover:bg-red-700 text-white transition duration-300 ease-in-out"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
