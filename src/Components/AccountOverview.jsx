import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiSettings, FiDollarSign } from 'react-icons/fi';

const AccountOverview = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-dark">
      {/* Header */}
      <header className="bg-[#08566e] text-white shadow-sm p-4">
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/" className="text-[#b4dbdc]">
            <FiUser className="fs-3" />
          </Link>
          <h1 className="h4 mb-0">Account Overview</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow-1 container px-4 py-5">
        <div className="bg-[#08566e] text-white rounded shadow-sm p-4 mb-4">
          <div className="d-flex justify-content-between mb-3">
            <h2 className="h5">Account Information</h2>
            <Link to="/settings" className="btn btn-link text-[#b4dbdc]">
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
               ₹1,200.00
            </p>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-[#08566e] text-white rounded shadow-sm p-4">
          <h2 className="h5 mb-3">Recent Activities</h2>
          <ul className="list-unstyled">
            <li className="d-flex justify-content-between align-items-center mb-3">
              <span>Payment to Mobile Provider</span>
              <span>₹59.99</span>
            </li>
            <li className="d-flex justify-content-between align-items-center mb-3">
              <span>Payment to Electric Company</span>
              <span>₹75.20</span>
            </li>
            <li className="d-flex justify-content-between align-items-center mb-3">
              <span>Payment to Water Services</span>
              <span>₹45.50</span>
            </li>
          </ul>
        </div>
      </main>

      {/* Footer Navigation */}
      <nav className="bg-[#08566e] text-white py-3">
        <div className="container">
          <ul className="d-flex justify-content-between mb-0">
            <li><Link to="/" className="text-[#b4dbdc]">Home</Link></li>
            <li><Link to="/transfer" className="text-[#b4dbdc]">Transfer</Link></li>
            <li><Link to="/bills" className="text-[#b4dbdc]">Bills</Link></li>
            <li><Link to="/invest" className="text-[#b4dbdc]">Invest</Link></li>
            <li><Link to="/more" className="text-[#b4dbdc]">More</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default AccountOverview;
