// src/components/Budgeting/ProgressTracker.jsx
import React from 'react';

const ProgressTracker = ({ targetAmount, savedAmount }) => {
  const progress = (savedAmount / targetAmount) * 100;

  return (
    <div className="mt-3">
      <div className="d-flex justify-content-between">
        <span>Progress</span>
        <span>{savedAmount} / {targetAmount}</span>
      </div>
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  );
};

export default ProgressTracker;
