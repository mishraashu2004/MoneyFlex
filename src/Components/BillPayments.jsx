import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiSearch, FiPlus, FiZap, FiWifi, FiUmbrella, FiToggleLeft, FiToggleRight } from 'react-icons/fi';

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
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="text-blue-600">
            <FiArrowLeft className="text-2xl" />
          </Link>
          <h1 className="text-2xl font-bold">Bill Payments</h1>
          <div></div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-wrap items-center justify-between mb-4">
            <select
              className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
            <div className="relative mt-4 sm:mt-0">
              <input
                type="text"
                placeholder="Search billers..."
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-6">
            <FiPlus className="inline-block mr-2" /> Add New Biller
          </button>
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-semibold">Recent Payments</h2>
            <select
              className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </div>
          <ul className="space-y-4">
            {filteredPayments.map(payment => (
              <li key={payment.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-semibold">{payment.biller}</p>
                  <p className="text-sm text-gray-600">{payment.date}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    payment.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {payment.status}
                  </span>
                </div>
                <div className="text-right">
                  <p className="font-semibold">${payment.amount.toFixed(2)}</p>
                  <button className="text-blue-600 hover:underline text-sm">Pay Again</button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Auto-Pay Options</h2>
          <ul className="space-y-4">
            {categories.map(category => (
              <li key={category.id} className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-blue-600 mr-2">{category.icon}</span>
                  <span>{category.name}</span>
                </div>
                <button className="text-2xl text-blue-600">
                  <FiToggleLeft />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <nav className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <ul className="flex justify-between items-center">
            <li><Link to="/" className="text-sm">Home</Link></li>
            <li><Link to="/transfer" className="text-sm">Transfer</Link></li>
            <li><Link to="/bills" className="text-sm">Bills</Link></li>
            <li><Link to="/invest" className="text-sm">Invest</Link></li>
            <li><Link to="/more" className="text-sm">More</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default BillPayments;

