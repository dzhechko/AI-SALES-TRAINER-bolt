import React from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  const { openModal } = useModal();

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-indigo-600" />
            <span className="font-bold text-xl text-gray-900">SalesPro AI</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <button
              onClick={() => openModal('demo')}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              Get a Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;