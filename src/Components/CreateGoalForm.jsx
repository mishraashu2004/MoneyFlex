import React, { useState } from 'react';

const CreateGoalForm = ({ onGoalSubmit }) => {
  const [goalName, setGoalName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGoal = { goalName, targetAmount, dueDate, category };
    onGoalSubmit(newGoal); // Callback to parent component to add the goal
  };

  return (
    <div className="container mt-5">
      <h2 className="text-[#b4dbdc] mb-4">Create New Goal</h2>
      <form onSubmit={handleSubmit} className="shadow-lg p-4 bg-[#08566e] rounded-lg">
        <div className="mb-3">
          <label className="form-label text-white">Goal Name</label>
          <input
            type="text"
            className="form-control"
            value={goalName}
            onChange={(e) => setGoalName(e.target.value)}
            required
            style={{ backgroundColor: '#08566e', color: '#b4dbdc', borderColor: '#b4dbdc' }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label text-white">Target Amount</label>
          <input
            type="number"
            className="form-control"
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
            required
            style={{ backgroundColor: '#08566e', color: '#b4dbdc', borderColor: '#b4dbdc' }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label text-white">Due Date</label>
          <input
            type="date"
            className="form-control"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
            style={{ backgroundColor: '#08566e', color: '#b4dbdc', borderColor: '#b4dbdc' }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label text-white">Category</label>
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            style={{ backgroundColor: '#08566e', color: '#b4dbdc', borderColor: '#b4dbdc' }}
          >
            <option value="">Select Category</option>
            <option value="Travel">Travel</option>
            <option value="Emergency Fund">Emergency Fund</option>
            <option value="Car Purchase">Car Purchase</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-full mt-4" style={{ backgroundColor: '#b4dbdc', color: '#08566e' }}>
          Create Goal
        </button>
      </form>
    </div>
  );
};

export default CreateGoalForm;
