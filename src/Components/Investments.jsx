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
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="text-blue-600">
            <FiArrowLeft className="text-2xl" />
          </Link>
          <h1 className="text-2xl font-bold">Investments</h1>
          <div></div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Portfolio Overview</h2>
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-gray-600">Total Value</p>
              <p className="text-3xl font-bold">${portfolioValue.toLocaleString()}</p>
            </div>
            <div className={`flex items-center ${portfolioChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {portfolioChange >= 0 ? <FiTrendingUp className="mr-1" /> : <FiTrendingDown className="mr-1" />}
              <span className="font-semibold">{portfolioChange}%</span>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Asset Allocation</h2>
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
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Investment Recommendations</h2>
            <ul className="space-y-4">
              {recommendations.map((rec, index) => (
                <li key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{rec.name}</p>
                    <p className="text-sm text-gray-600">{rec.type}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    rec.risk === 'High' ? 'bg-red-100 text-red-800' :
                    rec.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {rec.risk} Risk
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Investment Calculator</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">Initial Amount ($)</label>
              <input
                type="number"
                id="amount"
                name="amount"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={calculatorValues.amount}
                onChange={handleCalculatorChange}
              />
            </div>
            <div>
              <label htmlFor="tenure" className="block text-sm font-medium text-gray-700 mb-1">Tenure (Years)</label>
              <input
                type="number"
                id="tenure"
                name="tenure"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={calculatorValues.tenure}
                onChange={handleCalculatorChange}
              />
            </div>
            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label>
              <input
                type="number"
                id="interest"
                name="interest"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={calculatorValues.interest}
                onChange={handleCalculatorChange}
              />
            </div>
          </div>
          <button
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={() => alert(`Future Value: $${calculateInvestment()}`)}
          >
            Calculate
          </button>
        </div>
      </main>

      <nav className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <ul className="flex justify-between items-center">
            <li><Link to="/" className="text-sm">Home</Link></li>
            <li><Link to="/transfer" className="text-sm">Transfer</Link></li>
            <li><Link to="/bills" className="text-sm">Bills</Link></li>
            <li><Link to="/invest" className="text-sm">Invest</Link></li>
            <li><Link to="/more" className="text-sm">More</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Investments;

