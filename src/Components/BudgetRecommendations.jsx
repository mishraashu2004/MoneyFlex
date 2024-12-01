import React from 'react';

const BudgetRecommendations = () => {
  const tips = [
    'Try cutting back on dining out to save more for your goal.',
    'Consider reducing entertainment expenses this month.',
    'Look for discounts on groceries to save more.',
  ];

  return (
    <div className="container mt-5">
      <h3 className="text-[#b4dbdc] text-center mb-4">Budgeting Tips</h3>
      <ul className="list-group">
        {tips.map((tip, index) => (
          <li
            key={index}
            className="list-group-item bg-[#08566e] text-[#b4dbdc] rounded mb-3 shadow-sm p-3"
          >
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetRecommendations;
