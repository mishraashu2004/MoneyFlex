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
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Header */}
      <header className="bg-white shadow-sm p-4">
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/" className="text-primary">
            <FiArrowLeft className="fs-2" />
          </Link>
          <h1 className="fs-3 fw-bold">Money Transfer</h1>
          <div></div>
        </div>
      </header>

      <main className="flex-grow-1 container py-5">
        {/* Transfer Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <div className="mb-3">
            <label htmlFor="recipient" className="form-label">Recipient</label>
            <div className="input-group">
              <span className="input-group-text"><FiSearch /></span>
              <input
                type="text"
                id="recipient"
                className="form-control"
                placeholder="Search by name, account, or mobile"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="amount" className="form-label">Amount</label>
            <div className="input-group">
              <span className="input-group-text"><FiDollarSign /></span>
              <input
                type="number"
                id="amount"
                className="form-control"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                min="0.01"
                step="0.01"
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
            <select
              id="paymentMethod"
              className="form-select"
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

          <button type="submit" className="btn btn-primary w-100">
            Transfer Money
          </button>
        </form>

        {/* Recent Transfers */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h2 className="fs-4 fw-semibold mb-4">Recent Transfers</h2>
          <ul className="list-group">
            {recentTransfers.map(transfer => (
              <li key={transfer.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <FiUser className="text-muted me-2" />
                  <div>
                    <p className="mb-0">{transfer.name}</p>
                    <p className="text-muted small">{transfer.accountNumber}</p>
                  </div>
                </div>
                <span className="fw-semibold">${transfer.amount.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="bg-primary text-white py-3">
        <div className="container">
          <ul className="nav justify-content-between">
            <li className="nav-item"><Link to="/" className="nav-link text-white">Home</Link></li>
            <li className="nav-item"><Link to="/transfer" className="nav-link text-white">Transfer</Link></li>
            <li className="nav-item"><Link to="/bills" className="nav-link text-white">Bills</Link></li>
            <li className="nav-item"><Link to="/invest" className="nav-link text-white">Invest</Link></li>
            <li className="nav-item"><Link to="/more" className="nav-link text-white">More</Link></li>
          </ul>
        </div>
      </footer>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="modal d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
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
                <p>Are you sure you want to transfer ${amount} to {recipient}?</p>
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
