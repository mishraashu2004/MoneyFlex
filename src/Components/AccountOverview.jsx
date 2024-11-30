import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiSettings, FiDollarSign } from 'react-icons/fi';

const AccountOverview = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Header */}
      <header className="bg-white shadow-sm p-4">
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/" className="text-primary">
            <FiUser className="fs-3" />
          </Link>
          <h1 className="h4 mb-0">Account Overview</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow-1 container px-4 py-5">
        <div className="bg-white rounded shadow-sm p-4 mb-4">
          <div className="d-flex justify-content-between mb-3">
            <h2 className="h5">Account Information</h2>
            <Link to="/settings" className="btn btn-link text-primary">
              <FiSettings /> Settings
            </Link>
          </div>
          <div className="mb-3">
            <p className="fw-bold mb-1">Name:</p>
            <p>John Doe</p>
          </div>
          <div className="mb-3">
            <p className="fw-bold mb-1">Email:</p>
            <p>johndoe@example.com</p>
          </div>
          <div className="mb-3">
            <p className="fw-bold mb-1">Balance:</p>
            <p className="text-success">
              <FiDollarSign /> $1,200.00
            </p>
          </div>
        </div>

        <div className="bg-white rounded shadow-sm p-4">
          <h2 className="h5 mb-3">Recent Activities</h2>
          <ul className="list-unstyled">
            <li className="d-flex justify-content-between align-items-center mb-3">
              <span>Payment to Mobile Provider</span>
              <span>$59.99</span>
            </li>
            <li className="d-flex justify-content-between align-items-center mb-3">
              <span>Payment to Electric Company</span>
              <span>$75.20</span>
            </li>
            <li className="d-flex justify-content-between align-items-center mb-3">
              <span>Payment to Water Services</span>
              <span>$45.50</span>
            </li>
          </ul>
        </div>
      </main>

      {/* Footer Navigation */}
      <nav className="bg-primary text-white py-3">
        <div className="container">
          <ul className="d-flex justify-content-between mb-0">
            <li><Link to="/" className="text-white">Home</Link></li>
            <li><Link to="/transfer" className="text-white">Transfer</Link></li>
            <li><Link to="/bills" className="text-white">Bills</Link></li>
            <li><Link to="/invest" className="text-white">Invest</Link></li>
            <li><Link to="/more" className="text-white">More</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default AccountOverview;
