import React, { useState, useMemo } from 'react';
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

  const filteredPayments = useMemo(() => {
    return recentPayments.filter(payment => {
      return (
        (filter === 'all' || payment.status === filter) &&
        payment.biller.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === '' || payment.category === selectedCategory)
      );
    });
  }, [filter, searchTerm, selectedCategory]);

  return (
    <div className="d-flex flex-column min-vh-100 bg-[#1a202c]">
      {/* Header */}
      <header className="bg-[#08566e] shadow-md p-4">
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/" className="text-[#b4dbdc] hover:text-[#1a202c] transition-colors" aria-label="Go back">
            <FiArrowLeft className="fs-3" />
          </Link>
          <h1 className="h4 mb-0 text-[#b4dbdc] font-semibold">Bill Payments</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow-1 container px-4 py-5">
        <div className="bg-[#2d3748] rounded-lg shadow-lg p-4 mb-4">
          <div className="d-flex justify-content-between mb-3">
            {/* Category Filter */}
            <select
              className="form-select w-auto text-[#b4dbdc] bg-[#2d3748] border border-[#08566e] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#08566e]"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              aria-label="Select category"
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
                className="form-control ps-5 bg-[#2d3748] text-[#b4dbdc] border-[#08566e] focus:outline-none focus:ring-2 focus:ring-[#08566e]"
                placeholder="Search billers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search billers"
              />
              <FiSearch className="position-absolute top-50 start-0 translate-middle-y ms-2 text-muted" />
            </div>
          </div>

          {/* Add Biller Button */}
          <button className="btn w-100 mb-4" style={{ backgroundColor: '#08566e', color: '#b4dbdc' }}>
            <FiPlus className="me-2" /> Add New Biller
          </button>

          {/* Payment Status Filter */}
          <div className="d-flex justify-content-between mb-4">
            <h2 className="text-[#b4dbdc] text-lg font-semibold">Recent Payments</h2>
            <select
              className="form-select text-[#b4dbdc] bg-[#2d3748] border border-[#08566e] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#08566e] transition-all"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              aria-label="Filter payments by status"
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </div>

          {/* Payment List */}
          <ul className="list-unstyled">
            {filteredPayments.map(payment => (
              <li key={payment.id} className="d-flex justify-content-between align-items-center border-bottom py-4 bg-[#2d3748] hover:bg-[#3c4858] transition-colors">
                <div>
                  <p className="fw-bold mb-1 text-[#b4dbdc] text-xl">{payment.biller}</p>
                  <p className="text-[#b4dbdc] text-muted mb-2">{payment.date}</p> {/* Updated date color */}
                  <span className={`badge ${payment.status === 'completed' ? 'bg-success' : 'bg-warning'} text-[#1a202c]`}>
                    {payment.status}
                  </span>
                </div>
                <div className="text-end">
                  <p className="fw-bold mb-1 text-[#b4dbdc] text-xl">₹{payment.amount.toFixed(2)}</p>
                  <button className="btn btn-link text-[#08566e] text-lg">Pay Again</button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Auto-Pay Options */}
        <div className="bg-[#2d3748] rounded-lg shadow-lg p-5 mb-5">
          <h2 className="text-[#b4dbdc] text-lg font-semibold mb-4">Auto-Pay Options</h2>
          <ul className="list-unstyled">
            {categories.map(category => (
              <li key={category.id} className="d-flex justify-content-between align-items-center mb-4">
                <div className="d-flex align-items-center">
                  <span className="text-[#08566e] me-3">{category.icon}</span>
                  <span className="text-[#b4dbdc] font-medium text-lg">{category.name}</span>
                </div>
                <button className="btn btn-link text-[#08566e] fs-4" aria-label={`Toggle auto-pay for ${category.name}`}>
                  <FiToggleLeft />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </main>

      {/* Footer Navigation */}
      <nav className="bg-[#08566e] text-[#b4dbdc] py-4 shadow-md">
        <div className="container">
          <ul className="d-flex justify-content-between mb-0">
            <li><Link to="/" className="text-[#b4dbdc] hover:text-[#1a202c] transition-colors">Home</Link></li>
            <li><Link to="/transfer" className="text-[#b4dbdc] hover:text-[#1a202c] transition-colors">Transfer</Link></li>
            <li><Link to="/bills" className="text-[#b4dbdc] hover:text-[#1a202c] transition-colors">Bills</Link></li>
            <li><Link to="/invest" className="text-[#b4dbdc] hover:text-[#1a202c] transition-colors">Invest</Link></li>
            <li><Link to="/more" className="text-[#b4dbdc] hover:text-[#1a202c] transition-colors">More</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default BillPayments;
