import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiSearch, FiPlus, FiZap, FiWifi, FiUmbrella, FiToggleLeft } from 'react-icons/fi';

const BillPayments = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'utilities', name: 'Utilities', icon: <FiZap /> },
    { id: 'telecom', name: 'Telecom', icon: <FiWifi /> },
    { id: 'insurance', name: 'Insurance', icon: <FiUmbrella /> },
  ];

  const recentPayments = [
    { id: 1, biller: 'Electric Company', amount: 75.20, date: '2024-05-01', status: 'completed', category: 'utilities' },
    { id: 2, biller: 'Water Services', amount: 45.50, date: '2024-05-03', status: 'pending', category: 'utilities' },
    { id: 3, biller: 'Mobile Provider', amount: 59.99, date: '2024-05-05', status: 'completed', category: 'telecom' },
    { id: 4, biller: 'Internet Service', amount: 89.99, date: '2024-05-07', status: 'completed', category: 'telecom' },
    { id: 5, biller: 'Home Insurance', amount: 150.00, date: '2024-05-10', status: 'pending', category: 'insurance' },
  ];

  const filteredPayments = recentPayments.filter(payment => {
    return (
      (filter === 'all' || payment.status === filter) &&
      payment.biller.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || payment.category === selectedCategory)
    );
  });

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Header */}
      <header className="bg-white shadow-sm p-4">
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/" className="text-primary">
            <FiArrowLeft className="fs-3" />
          </Link>
          <h1 className="h4 mb-0">Bill Payments</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow-1 container px-4 py-5">
        <div className="bg-white rounded shadow-sm p-4 mb-4">
          <div className="d-flex justify-content-between mb-3">
            {/* Category Filter */}
            <select
              className="form-select w-auto"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>

            {/* Search Bar */}
            <div className="position-relative w-50">
              <input
                type="text"
                className="form-control ps-5"
                placeholder="Search billers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FiSearch className="position-absolute top-50 start-0 translate-middle-y ms-2 text-muted" />
            </div>
          </div>

          {/* Add Biller Button */}
          <button className="btn btn-primary w-100 mb-4">
            <FiPlus className="me-2" /> Add New Biller
          </button>

          {/* Payment Status Filter */}
          <div className="d-flex justify-content-between mb-3">
            <h2 className="h5">Recent Payments</h2>
            <select
              className="form-select w-auto"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </div>

          {/* Payment List */}
          <ul className="list-unstyled">
            {filteredPayments.map(payment => (
              <li key={payment.id} className="d-flex justify-content-between align-items-center border-bottom py-2">
                <div>
                  <p className="fw-bold mb-0">{payment.biller}</p>
                  <p className="text-muted mb-0">{payment.date}</p>
                  <span className={`badge ${payment.status === 'completed' ? 'bg-success' : 'bg-warning'}`}>
                    {payment.status}
                  </span>
                </div>
                <div className="text-end">
                  <p className="fw-bold mb-0">${payment.amount.toFixed(2)}</p>
                  <button className="btn btn-link text-primary btn-sm">Pay Again</button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Auto-Pay Options */}
        <div className="bg-white rounded shadow-sm p-4">
          <h2 className="h5 mb-3">Auto-Pay Options</h2>
          <ul className="list-unstyled">
            {categories.map(category => (
              <li key={category.id} className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center">
                  <span className="text-primary me-2">{category.icon}</span>
                  <span>{category.name}</span>
                </div>
                <button className="btn btn-link text-primary fs-4">
                  <FiToggleLeft />
                </button>
              </li>
            ))}
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

export default BillPayments;
