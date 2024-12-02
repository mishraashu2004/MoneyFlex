import React from 'react';
import ProgressTracker from './ProgressTracker';

const goals = [
  { id: 1, name: 'Vacation', targetAmount: 10000, savedAmount: 4500, dueDate: '2024-12-31' },
  { id: 2, name: 'Car Purchase', targetAmount: 50000, savedAmount: 12000, dueDate: '2025-06-30' },
  { id: 3, name: 'Emergency Fund', targetAmount: 30000, savedAmount: 15000, dueDate: '2024-10-15' }
];

const GoalDashboard = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center text-[#b4dbdc] mb-4">Your Financial Goals</h2>
      <div className="list-group">
        {goals.map(goal => (
          <div key={goal.id} className="list-group-item p-3 bg-[#08566e] text-[#b4dbdc] mb-3 rounded-lg shadow-sm">
            <h5 className="fw-bold">{goal.name}</h5>
            <p>Target: ₹{goal.targetAmount} | Due: {goal.dueDate}</p>
            <ProgressTracker
              targetAmount={goal.targetAmount}
              savedAmount={goal.savedAmount}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalDashboard;
