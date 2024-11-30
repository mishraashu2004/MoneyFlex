import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiDollarSign, FiTrendingUp, FiTrendingDown } from 'react-icons/fi';
import { LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Investments = () => {
  const [calculatorValues, setCalculatorValues] = useState({
    amount: '',
    tenure: '',
    interest: '',
  });

  const portfolioValue = 125000;
  const portfolioChange = 2.5;

  const portfolioData = [
    { name: 'Jan', value: 100000 },
    { name: 'Feb', value: 105000 },
    { name: 'Mar', value: 110000 },
    { name: 'Apr', value: 108000 },
    { name: 'May', value: 115000 },
    { name: 'Jun', value: 125000 },
  ];

  const assetAllocation = [
    { name: 'Stocks', value: 60 },
    { name: 'Bonds', value: 30 },
    { name: 'Cash', value: 10 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  const recommendations = [
    { name: 'Tech Growth Fund', type: 'Mutual Fund', risk: 'High' },
    { name: 'Dividend Aristocrats ETF', type: 'ETF', risk: 'Medium' },
    { name: 'Government Bonds', type: 'Bonds', risk: 'Low' },
  ];

  const handleCalculatorChange = (e) => {
    const { name, value } = e.target;
    setCalculatorValues(prev => ({ ...prev, [name]: value }));
  };

  const calculateInvestment = () => {
    const { amount, tenure, interest } = calculatorValues;
    const principal = parseFloat(amount);
    const rate = parseFloat(interest) / 100;
    const time = parseFloat(tenure);
    const futureValue = principal * Math.pow((1 + rate), time);
    return futureValue.toFixed(2);
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Header */}
      <header className="bg-white shadow-sm py-3">
        <div className="container d-flex align-items-center justify-content-between">
          <Link to="/" className="text-primary">
            <FiArrowLeft className="fs-2" />
          </Link>
          <h1 className="fs-3 fw-bold">Investments</h1>
          <div></div>
        </div>
      </header>

      <main className="flex-grow-1 container py-5">
        {/* Portfolio Overview */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-5">
          <h2 className="fs-4 fw-semibold mb-4">Portfolio Overview</h2>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <p className="text-muted">Total Value</p>
              <p className="fs-3 fw-bold">${portfolioValue.toLocaleString()}</p>
            </div>
            <div className={`d-flex align-items-center ${portfolioChange >= 0 ? 'text-success' : 'text-danger'}`}>
              {portfolioChange >= 0 ? <FiTrendingUp className="me-1" /> : <FiTrendingDown className="me-1" />}
              <span className="fw-semibold">{portfolioChange}%</span>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={portfolioData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Asset Allocation and Recommendations */}
        <div className="row g-4 mb-5">
          {/* Asset Allocation */}
          <div className="col-md-6">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="fs-4 fw-semibold mb-4">Asset Allocation</h2>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={assetAllocation}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {assetAllocation.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Investment Recommendations */}
          <div className="col-md-6">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="fs-4 fw-semibold mb-4">Investment Recommendations</h2>
              <ul className="list-unstyled">
                {recommendations.map((rec, index) => (
                  <li key={index} className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <p className="fw-semibold">{rec.name}</p>
                      <p className="text-muted small">{rec.type}</p>
                    </div>
                    <span className={`badge ${rec.risk === 'High' ? 'bg-danger' : rec.risk === 'Medium' ? 'bg-warning' : 'bg-success'}`}>
                      {rec.risk} Risk
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Investment Calculator */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h2 className="fs-4 fw-semibold mb-4">Investment Calculator</h2>
          <div className="row g-3 mb-4">
            <div className="col-md-4">
              <label htmlFor="amount" className="form-label">Initial Amount ($)</label>
              <input
                type="number"
                id="amount"
                name="amount"
                className="form-control"
                value={calculatorValues.amount}
                onChange={handleCalculatorChange}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="tenure" className="form-label">Tenure (Years)</label>
              <input
                type="number"
                id="tenure"
                name="tenure"
                className="form-control"
                value={calculatorValues.tenure}
                onChange={handleCalculatorChange}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="interest" className="form-label">Interest Rate (%)</label>
              <input
                type="number"
                id="interest"
                name="interest"
                className="form-control"
                value={calculatorValues.interest}
                onChange={handleCalculatorChange}
              />
            </div>
          </div>
          <button
            className="btn btn-primary w-100"
            onClick={() => alert(`Future Value: $${calculateInvestment()}`)}
          >
            Calculate
          </button>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="bg-primary text-white py-3">
        <div className="container">
          <ul className="d-flex justify-content-between list-unstyled">
            <li><Link to="/" className="text-white">Home</Link></li>
            <li><Link to="/transfer" className="text-white">Transfer</Link></li>
            <li><Link to="/bills" className="text-white">Bills</Link></li>
            <li><Link to="/invest" className="text-white">Invest</Link></li>
            <li><Link to="/more" className="text-white">More</Link></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Investments;
