import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiSearch, FiUser, FiDollarSign } from 'react-icons/fi';

import Navigation from './Navigation.jsx';

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
    alert('Transfer successful!');
    setShowConfirmation(false);
    setRecipient('');
    setAmount('');
    setPaymentMethod('');
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-dark">
      {/* Header */}
      <Navigation/>

      <main className="flex-grow-1 container py-5">
        {/* Transfer Form */}
        <form onSubmit={handleSubmit} className="bg-[#1a202c] rounded-lg shadow-lg p-5 mb-5 w-100">
          <div className="mb-4">
            <label htmlFor="recipient" className="form-label fs-5 text-[rgb(120,193,195)]">Recipient</label>
            <div className="input-group">
              <span className="input-group-text text-[rgb(120,193,195)]"><FiSearch /></span>
              <input
                type="text"
                id="recipient"
                className="form-control border-2 shadow-sm "
                placeholder="Search by name, account, or mobile"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="amount" className="form-label fs-5 text-[rgb(120,193,195)]">Amount</label>
            <div className="input-group">
              <span className="input-group-text text-[#b4dbdc]">₹</span>
              <input
                type="number"
                id="amount"
                className="form-control border-2 shadow-sm "
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                min="0.01"
                step="0.01"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="paymentMethod" className="form-label fs-5 text-[#b4dbdc]">Payment Method</label>
            <select
              id="paymentMethod"
              className="form-select border-2 shadow-sm rounded-pill"
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
            className="btn btn-primary w-100 py-3 rounded-pill shadow-sm hover:shadow-lg transition duration-300 ease-in-out"
            style={{ backgroundColor: '#08566e' }}
          >
            Transfer Money
          </button>
        </form>
       
        {/* Recent Transfers */}
        <div className="bg-[#1a202c] rounded-lg shadow-lg p-4 w-100">
          <h2 className="fs-4 fw-semibold mb-4 text-[rgb(120,193,195)]">Recent Transfers</h2>
          <ul className="list-group ">
            {recentTransfers.map(transfer => (
              <li key={transfer.id} className="list-group-item d-flex justify-content-between align-items-center text-[rgb(120,193,195)]">
                <div className="d-flex align-items-center ">
                  <FiUser className="text-muted me-2" />
                  <div >
                    <p className="mb-0 fw-medium">{transfer.name}</p>
                    <p className="text-muted small">{transfer.accountNumber}</p>
                  </div>
                </div>
                <span className="fw-semibold">₹{transfer.amount.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>

      {/* Footer Navigation */}


      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="modal d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content bg-[#2d3748] text-[#b4dbdc]">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Transfer</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setShowConfirmation(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p className="fs-5 text-[#b4dbdc]">Are you sure you want to transfer ₹{amount} to {recipient}?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowConfirmation(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleConfirmTransfer}
                  style={{ backgroundColor: '#08566e' }}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoneyTransfer;
