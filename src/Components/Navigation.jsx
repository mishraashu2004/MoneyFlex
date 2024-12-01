import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiSend, FiFileText, FiTrendingUp, FiMoreHorizontal } from 'react-icons/fi';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-[#08566e]">
      <div className="container-fluid">
        <ul className="navbar-nav w-100 d-flex justify-content-around">
          <li className="nav-item text-center">
            <Link to="/" className="nav-link text-light py-2 px-3 rounded-lg hover:bg-[#1a202c] transition-all duration-300">
              <FiHome className="fs-3 mb-2" /> {/* Adjusted margin */}
              <span className="d-block fs-6">Home</span>
            </Link>
          </li>
          <li className="nav-item text-center">
            <Link to="/transfer" className="nav-link text-light py-2 px-3 rounded-lg hover:bg-[#1a202c] transition-all duration-300">
              <FiSend className="fs-3 mb-2" /> {/* Adjusted margin */}
              <span className="d-block fs-6">Transfer</span>
            </Link>
          </li>
          <li className="nav-item text-center">
            <Link to="/bills" className="nav-link text-light py-2 px-3 rounded-lg hover:bg-[#1a202c] transition-all duration-300">
              <FiFileText className="fs-3 mb-2" /> {/* Adjusted margin */}
              <span className="d-block fs-6">Bills</span>
            </Link>
          </li>
          <li className="nav-item text-center">
            <Link to="/invest" className="nav-link text-light py-2 px-3 rounded-lg hover:bg-[#1a202c] transition-all duration-300">
              <FiTrendingUp className="fs-3 mb-2" /> {/* Adjusted margin */}
              <span className="d-block fs-6">Invest</span>
            </Link>
          </li>
          <li className="nav-item text-center">
            <Link to="/more" className="nav-link text-light py-2 px-3 rounded-lg hover:bg-[#1a202c] transition-all duration-300">
              <FiMoreHorizontal className="fs-3 mb-2" /> {/* Adjusted margin */}
              <span className="d-block fs-6">More</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
