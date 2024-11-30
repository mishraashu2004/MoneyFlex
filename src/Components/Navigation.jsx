import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiSend, FiFileText, FiTrendingUp, FiMoreHorizontal } from 'react-icons/fi';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <ul className="navbar-nav d-flex justify-content-between w-100">
          <li className="nav-item">
            <Link to="/" className="nav-link text-center">
              <FiHome className="fs-2" />
              <span className="d-block fs-6">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/transfer" className="nav-link text-center">
              <FiSend className="fs-2" />
              <span className="d-block fs-6">Transfer</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/bills" className="nav-link text-center">
              <FiFileText className="fs-2" />
              <span className="d-block fs-6">Bills</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/invest" className="nav-link text-center">
              <FiTrendingUp className="fs-2" />
              <span className="d-block fs-6">Invest</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/more" className="nav-link text-center">
              <FiMoreHorizontal className="fs-2" />
              <span className="d-block fs-6">More</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
