import React, { useState } from "react";

const AccountSelector = () => {
  // Mock account data
  const accounts = [
    { id: 1, bank: "HDFC Bank", accountNumber: "XXXX1234", balance: "₹50,000" },
    { id: 2, bank: "SBI Bank", accountNumber: "XXXX5678", balance: "₹75,000" },
    { id: 3, bank: "ICICI Bank", accountNumber: "XXXX9101", balance: "₹30,000" },
  ];

  const [selectedAccount, setSelectedAccount] = useState(accounts[0]);

  const handleAccountChange = (e) => {
    const selected = accounts.find(
      (account) => account.id === parseInt(e.target.value)
    );
    setSelectedAccount(selected);
  };

  return (
    <div className="w-full max-w-full mx-auto p-6 bg-[#1a202c] shadow-lg rounded-lg">
      <h3 className="text-2xl font-semibold text-[#b4dbdc] mb-6">Select Your Account</h3>

      {/* Account Selection Dropdown */}
      <div className="mb-6">
        <label htmlFor="accountSelect" className="block text-[#b4dbdc] mb-2 text-lg">
          Choose an account:
        </label>
        <select
          id="accountSelect"
          className="form-select block w-full border border-[#08566e] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#08566e] transition-colors"
          value={selectedAccount.id}
          onChange={handleAccountChange}
          aria-label="Account selection"
        >
          {accounts.map((account) => (
            <option key={account.id} value={account.id} className="bg-[#1a202c] text-[#b4dbdc]">
              {account.bank} - {account.accountNumber}
            </option>
          ))}
        </select>
      </div>

      {/* Display Account Balance */}
      <div className="bg-[#2d3748] p-6 rounded-lg shadow-sm transition-colors duration-300 ease-in-out hover:bg-[#4a5568]">
        <h2 className="text-xl font-semibold text-[#b4dbdc]">Account Balance</h2>
        <p className="text-[#b4dbdc] text-3xl font-bold">{selectedAccount.balance}</p>
      </div>
    </div>
  );
};

export default AccountSelector;
