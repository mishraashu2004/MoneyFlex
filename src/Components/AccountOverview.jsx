import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiDownload, FiSearch, FiSettings } from 'react-icons/fi';

const AccountOverview = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const transactions = [
    { id: 1, date: '2024-05-01', description: 'Grocery Store', amount: -52.36, type: 'debit' },
    { id: 2, date: '2024-05-02', description: 'Salary Deposit', amount: 3500.00, type: 'credit' },
    { id: 3, date: '2024-05-03', description: 'Electric Bill', amount: -75.20, type: 'debit' },
    { id: 4, date: '2024-05-04', description: 'Online Shopping', amount: -129.99, type: 'debit' },
    { id: 5, date: '2024-05-05', description: 'Interest Credit', amount: 12.50, type: 'credit' },
  ];

  const filteredTransactions = transactions.filter(transaction => {
    return (
      (filter === 'all' || transaction.type === filter) &&
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="text-blue-600">
            <FiArrowLeft className="text-2xl" />
          </Link>
          <h1 className="text-2xl font-bold">Checking Account</h1>
          <div className="text-right">
            <p className="text-sm text-gray-600">Current Balance</p>
            <p className="text-2xl font-bold">$3,255.45</p>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
          <div className="flex justify-between mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search transactions..."
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <select
              className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="debit">Debits</option>
              <option value="credit">Credits</option>
            </select>
          </div>
          <ul className="space-y-4">
            {filteredTransactions.map(transaction => (
              <li key={transaction.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-semibold">{transaction.description}</p>
                  <p className="text-sm text-gray-600">{transaction.date}</p>
                </div>
                <span className={`font-semibold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  ${Math.abs(transaction.amount).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Account Statements</h2>
            <ul className="space-y-2">
              <li>
                <button className="flex items-center text-blue-600 hover:underline">
                  <FiDownload className="mr-2" /> May 2024 Statement
                </button>
              </li>
              <li>
                <button className="flex items-center text-blue-600 hover:underline">
                  <FiDownload className="mr-2" /> April 2024 Statement
                </button>
              </li>
              <li>
                <button className="flex items-center text-blue-600 hover:underline">
                  <FiDownload className="mr-2" /> March 2024 Statement
                </button>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/change-pin" className="flex items-center text-blue-600 hover:underline">
                  <FiSettings className="mr-2" /> Change PIN
                </Link>
              </li>
              <li>
                <Link to="/update-address" className="flex items-center text-blue-600 hover:underline">
                  <FiSettings className="mr-2" /> Update Address
                </Link>
              </li>
              <li>
                <Link to="/notification-preferences" className="flex items-center text-blue-600 hover:underline">
                  <FiSettings className="mr-2" /> Notification Preferences
                </Link>
              </li>
            </ul>
          </div>
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

export default AccountOverview;

