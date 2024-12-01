import React, { useState } from 'react';
import GoalDashboard from './GoalDashboard';
import CreateGoalForm from './CreateGoalForm';
import SpendingInsights from './SpendingInsights';
import BudgetRecommendations from './BudgetRecommendations';

const BudgetingPage = () => {
  const [goals, setGoals] = useState([]);
  
  // Callback to handle adding a new goal
  const handleGoalSubmit = (newGoal) => {
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  return (
    <div className="min-vh-100 bg-dark text-white">
      <div className="container mt-5">
        <h1 className="text-center mb-4 text-[#b4dbdc]">Budgeting Dashboard</h1>

        {/* Create New Goal Section */}
        <div className="mb-5">
          <CreateGoalForm onGoalSubmit={handleGoalSubmit} />
        </div>

        {/* Goals Overview */}
        <div className="mb-5">
          <GoalDashboard goals={goals} />
        </div>

        {/* Spending Insights Section */}
        <div className="mb-5">
          <SpendingInsights />
        </div>

        {/* Budget Recommendations */}
        <div>
          <BudgetRecommendations />
        </div>
      </div>
    </div>
  );
};

export default BudgetingPage;
