import React from 'react';

const spendingData = [
  { category: 'Groceries', amount: 200 },
  { category: 'Dining Out', amount: 100 },
  { category: 'Entertainment', amount: 150 },
];

const SpendingInsights = () => {
  return (
    <div className="container mt-5">
      <h3 className="text-[#b4dbdc] text-center mb-4">Spending Insights</h3>
      <ul className="list-group">
        {spendingData.map((spend, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center bg-[#08566e] text-[#b4dbdc] rounded mb-3 shadow-sm p-3"
          >
            <span>{spend.category}</span>
            <span>₹{spend.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpendingInsights;
