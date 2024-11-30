import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiSearch, FiUser, FiDollarSign } from 'react-icons/fi';

const MoneyTransfer = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const recentTransfers = [
    { id: 1, name: 'John Doe', accountNumber: '**** 1234', amount: 100 },
    { id: 2, name: 'Jane Smith', accountNumber: '**** 5678', amount: 250 },
    { id: 3, name: 'Mike Johnson', accountNumber: '**** 9012', amount: 75 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recipient && amount && paymentMethod) {
      setShowConfirmation(true);
    }
  };

  const handleConfirmTransfer = () => {
    // Implement the actual transfer logic here
    alert('Transfer successful!');
    setShowConfirmation(false);
    setRecipient('');
    setAmount('');
    setPaymentMethod('');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="text-blue-600">
            <FiArrowLeft className="text-2xl" />
          </Link>
          <h1 className="text-2xl font-bold">Money Transfer</h1>
          <div></div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="mb-4">
            <label htmlFor="recipient" className="block text-sm font-medium text-gray-700 mb-2">Recipient</label>
            <div className="relative">
              <input
                type="text"
                id="recipient"
                className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search by name, account, or mobile"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                required
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
            <div className="relative">
              <input
                type="number"
                id="amount"
                className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                min="0.01"
                step="0.01"
              />
              <FiDollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
            <select
              id="paymentMethod"
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="">Select a payment method</option>
              <option value="upi">UPI</option>
              <option value="imps">IMPS</option>
              <option value="neft">NEFT</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Transfer Money
          </button>
        </form>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Transfers</h2>
          <ul className="space-y-4">
            {recentTransfers.map(transfer => (
              <li key={transfer.id} className="flex justify-between items-center border-b pb-2">
                <div className="flex items-center">
                  <FiUser className="text-gray-400 mr-2" />
                  <div>
                    <p className="font-semibold">{transfer.name}</p>
                    <p className="text-sm text-gray-600">{transfer.accountNumber}</p>
                  </div>
                </div>
                <span className="font-semibold">${transfer.amount.toFixed(2)}</span>
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

      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Confirm Transfer</h2>
            <p>Are you sure you want to transfer ${amount} to {recipient}?</p>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                onClick={() => setShowConfirmation(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={handleConfirmTransfer}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoneyTransfer;

