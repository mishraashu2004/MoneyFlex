import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiSend, FiFileText, FiTrendingUp, FiMoreHorizontal } from 'react-icons/fi';

const Navigation = () => {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <ul className="flex justify-between items-center py-3">
          <li>
            <Link to="/" className="flex flex-col items-center">
              <FiHome className="text-2xl" />
              <span className="text-xs mt-1">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/transfer" className="flex flex-col items-center">
              <FiSend className="text-2xl" />
              <span className="text-xs mt-1">Transfer</span>
            </Link>
          </li>
          <li>
            <Link to="/bills" className="flex flex-col items-center">
              <FiFileText className="text-2xl" />
              <span className="text-xs mt-1">Bills</span>
            </Link>
          </li>
          <li>
            <Link to="/invest" className="flex flex-col items-center">
              <FiTrendingUp className="text-2xl" />
              <span className="text-xs mt-1">Invest</span>
            </Link>
          </li>
          <li>
            <Link to="/more" className="flex flex-col items-center">
              <FiMoreHorizontal className="text-2xl" />
              <span className="text-xs mt-1">More</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

